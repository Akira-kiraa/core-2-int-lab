import { PropsWithChildren } from "react";
import { fitV } from "./utils/design";
import useFont from "./utils/useFont";

type BackgroundProps = PropsWithChildren<{}>;

function Background({ children }: BackgroundProps) {
  useFont("Marker Felt", `${REMOTE_DIR}MarkerFelt.ttf`);
  useFont("Inter", `${REMOTE_DIR}Inter.ttf`);
  return (
    <>
      <div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          background:
            "linear-gradient(180deg, #F4EACE 0%, rgba(245, 235, 207, 0) 100%)",
        }}
      >
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: fitV(527),
            background: `linear-gradient(0deg, #96D1E3 0%, rgba(210, 235, 243, 0.3) 100%)`,
          }}
        ></div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full">{children}</div>
    </>
  );
}

export default Background;
