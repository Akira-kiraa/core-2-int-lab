import { Link } from "react-router-dom";
import { fitH, fitV } from "../utils/design";

const introduction_title = `Introduction`;
const introduction_content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
export default function IntroductionPage() {
  return (
    <Link to="/selection">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div
          className="bg-major flex flex-col text-white text-center items-center font-common pt-2 pb-12 px-20 font-normal"
          style={{ width: fitH(902) }}
        >
          <div style={{ fontSize: fitV(60), marginBottom: fitV(1) }}>
            {introduction_title}
          </div>
          <div style={{ fontSize: fitV(24), lineHeight: `${fitV(29)}` }}>
            {introduction_content}
          </div>
        </div>
      </div>
    </Link>
  );
}
