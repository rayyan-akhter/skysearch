import React from "react";
import "./style.css";
export const Paper = ({
  width,
  height,
  className,
  children,
  padding,
  borderRadius,
}) => {
  return (
    <div
      style={{
        width,
        height,
        padding,
        borderRadius: borderRadius ?? "8px",
      }}
      className={`paper ${className || ""}`}
    >
      {children}
    </div>
  );
};
