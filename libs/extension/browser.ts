export function getBrowser() {
  if (typeof chrome !== "object")
    return "edge"
  if (typeof browser !== "object")
    return "chrome"
  return "firefox"
}