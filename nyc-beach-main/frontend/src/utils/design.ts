export function fitH(designPx: number) {
  return `${(designPx / 1280) * 100}vh`;
}

export function fitV(designPx: number) {
  return `${(designPx / 832) * 100}vh`;
}
