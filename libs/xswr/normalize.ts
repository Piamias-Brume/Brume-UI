export function stringOr<T, R>(or: (x: T) => R) {
  return (x: string | T) => typeof x === "string" ? x : or(x)
}