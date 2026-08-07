import React from "react";
import "./ProgressLine.scss";
import type { IParcent } from "./ProgressLine.type";

const ProgressLine = ({ parsent }: IParcent) => {
  return (
    <>
      <div
        className="goal goal__progres-line"
        style={
          {
            "--progress": `${parsent}%`,
            "--bg-color": parsent > 100 ? "#EF4444" : "#00B894",
            "--text-color-parcent": parsent >= 90 ? "#fff" : "#64748B",
          } as React.CSSProperties
        }
      >
        <span className="goal__parsent">{parsent}%</span>
      </div>
    </>
  );
};

export default ProgressLine;
