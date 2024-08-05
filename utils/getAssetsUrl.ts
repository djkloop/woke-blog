export function getAssetsUrl(name: string, path: string) {
  if (path) {
    return new URL(`../assets/${path}/${name}`, import.meta.url).href
  }
  return new URL(`../assets/${name}`, import.meta.url).href
}

export function getAssetsByUrl(url: string) {
  return new URL(url, import.meta.url).href
}