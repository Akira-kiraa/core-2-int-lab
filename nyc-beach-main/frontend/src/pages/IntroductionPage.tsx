import { Link } from "react-router-dom";
import { fitH, fitV } from "../utils/design";
import DropDown from "../DropDown";

const introduction_title = `Introduction`;
const introduction_content = `The water quality sample results collected by the Department of Health and Mental Hygiene at all New York City Beaches. These water quality results are used by the Department to determine the status (open, advisory, closed) of Beaches. This project visualizes only the latest three years of data, from 2020 to 2022. Data last updated on October 3, 2022.`;
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
      <DropDown />
    </Link>
  );
}
