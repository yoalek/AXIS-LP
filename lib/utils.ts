
export function cn(...inputs: (string | boolean | undefined | null | { [key: string]: any })[]) {
  return inputs
    .flat()
    .filter(Boolean)
    .map((x) => (typeof x === 'object' ? Object.keys(x).filter((k) => x[k]).join(' ') : x))
    .join(' ');
}
