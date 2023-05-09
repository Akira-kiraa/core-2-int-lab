export function fitH(designPx: number) {
  return (designPx / 1280) * window.innerWidth;
}

export function fitV(designPx: number) {
  return (designPx / 832) * window.innerHeight;
}
