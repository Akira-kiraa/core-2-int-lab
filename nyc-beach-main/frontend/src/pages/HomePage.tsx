import { Link } from "react-router-dom";
import { fitV } from "../utils/design";
import DropDown from "../DropDown";

export default function HomePage() {
  return (
    <Link to="/introduction">
      <div
        className="w-full h-full flex justify-center items-center"
        style={{
          fontFamily: "Marker Felt",
          fontSize: `${fitV(128)}`,
          lineHeight: `${fitV(147)}`,
          color: `#9BD89A`,
          // border: `1px solid #000000`,
          WebkitTextStroke: `${fitV(1)} #000000`,
        }}
      >
        BEACH<br></br>WATER<br></br>QUALITY<br></br>DATA
      </div>
      <DropDown />
    </Link>
  );
}
