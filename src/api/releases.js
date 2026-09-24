import { CONFIG } from "../config.js";

// Kształt zwracanego obiektu (niezależnie od źródła):
// {
//   version: string,
//   published_at: string (ISO date),
//   size_bytes: number | null,
//   sha256: string | null,
//   installer_url: string,
//   checksum_url: string | null,
//   source_url: string | null,
// }

export async function fetchLatestRelease() {
  if (CONFIG.CUSTOM_API_URL) {
    const res = await fetch(CONFIG.CUSTOM_API_URL);
    if (!res.ok) throw new Error("API error " + res.status);
    return await res.json();
  }

  const res = await fetch(
    `https://api.github.com/repos/${CONFIG.GITHUB_REPO}/releases/latest`
  );
  if (!res.ok) throw new Error("GitHub API error " + res.status);
  const data = await res.json();

  const installerAsset =
    data.assets?.find((a) => a.name.toLowerCase().endsWith(".exe")) ||
    data.assets?.[0];
  const checksumAsset = data.assets?.find((a) =>
    /sha256|checksum/i.test(a.name)
  );

  return {
    version: data.tag_name,
    published_at: data.published_at,
    size_bytes: installerAsset?.size ?? null,
    // GitHub API nie zwraca sumy kontrolnej bezpośrednio — pobierz osobno
    // zawartość checksumAsset.browser_download_url, jeśli jest potrzebna.
    sha256: null,
    installer_url: installerAsset?.browser_download_url ?? data.html_url,
    checksum_url: checksumAsset?.browser_download_url ?? null,
    source_url: data.zipball_url,
  };
}

export function formatSize(bytes) {
  if (!bytes) return "—";
  const mb = bytes / (1024 * 1024);
  return mb >= 1024 ? (mb / 1024).toFixed(2) + " GB" : mb.toFixed(1) + " MB";
}

export function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
