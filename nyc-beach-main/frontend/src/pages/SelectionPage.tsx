import { Link } from "react-router-dom";
import data from "../data.json";
import { getKeys } from "../utils/getEntries";
import { fitV } from "../utils/design";
import DropDown from "../DropDown";

export default function SelectionPage() {
  return (
    <div
      className="h-full w-full max-w-full grid overflow-y-scroll place-self-center items-stretch"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
        rowGap: fitV(100),
        columnGap: fitV(75),
        padding: `${fitV(100)} ${fitV(75)}`,
      }}
    >
      {getKeys(data)
        .sort()
        .map((beachName) => {
          const beachKey = encodeURIComponent(beachName);
          return (
            <Link
              to={`/beaches/${beachKey}`}
              key={beachKey}
              className="bg-major text-white flex items-center justify-center text-center font-common hover:opacity-70 transition-all duration-200"
              style={{ padding: fitV(16) }}
            >
              {beachName}
            </Link>
          );
        })}
      <DropDown />
    </div>
  );
}
