import { useEffect } from 'react';

export type useFontProps = [fontFamily?: string, fontSrc?: string, fontDesc?: FontFaceDescriptors];
export default function useFont(...[fontFamily, fontSrc, fontDesc]: useFontProps) {
  useEffect(() => {
    if (!fontFamily || !fontSrc) return;
    const font = new FontFace(fontFamily, `url("${fontSrc}")`, fontDesc);
    font
      .load()
      .then(loadedFont => {
        console.log('loaded font', loadedFont);
        document.fonts.add(loadedFont);
      })
      .catch(err => {
        console.error('failed to load font', err, fontSrc, fontDesc, fontFamily);
      });
  }, [fontFamily, fontSrc, fontDesc]);
}
