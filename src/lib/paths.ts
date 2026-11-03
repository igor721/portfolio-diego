/**
 * Prefixo usado no GitHub Pages (nome do repositório).
 * Altere aqui se o repositório tiver outro nome.
 */
export const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio-diego" : "";

/** Prefixa um caminho público com o basePath (necessário no GitHub Pages). */
export function withBasePath(path: string): string {
  if (!path) return basePath || "/";
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}