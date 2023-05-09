import { Link } from "react-router-dom";
import { fitV } from "../utils/design";

export default function HomePage() {
  return (
    <Link to="/introduction">
      <div
        className="w-full h-full flex justify-center items-center"
        style={{
          fontFamily: "Marker Felt",
          fontSize: `${fitV(128)}px`,
          lineHeight: `${fitV(147)}px`,
          color: `#9BD89A`,
          // border: `1px solid #000000`,
          WebkitTextStroke: `${Math.max(1, fitV(1))}px #000000`,
        }}
      >
        BEACH<br></br>WATER<br></br>QUALITY<br></br>DATA
      </div>
    </Link>
  );
}
