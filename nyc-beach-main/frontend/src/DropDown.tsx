import React, { useState } from "react";
import { fitV } from "./utils/design";
import { Link } from "react-router-dom";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const handleOpenToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };
  return (
    <>
      <div
        className="absolute bg-white/60 rounded-full cursor-pointer"
        style={{
          width: fitV(60),
          height: fitV(60),
          top: fitV(17),
          right: fitV(30),
        }}
        onClick={handleOpenToggle}
      ></div>
      <div
        className="absolute bg-white/60 rounded-full cursor-pointer"
        style={{
          width: fitV(45),
          height: fitV(45),
          top: fitV(46),
          right: fitV(15),
        }}
        onClick={handleOpenToggle}
      ></div>
      {open && (
        <div
          className="absolute h-full w-full top-0 left-0 "
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(false)}}
        >
          <div
            className="absolute"
            style={{
              right: fitV(15),
              top: fitV(96),
              height: fitV(160),
              width: fitV(150),
            }}
          >
            <div
              className="relative h-full w-full flex flex-col items-center py-5 space-y-[2vh] font-common bg-major/70 rounded-xl text-white"
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{ fontSize: fitV(20) }}
            >
              <Link to="/">Home</Link>
              <Link to="/introduction">Introduction</Link>
              <Link to="/selection">Selection</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
