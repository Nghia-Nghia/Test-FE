import React from "react";

interface SateCompletedProps {
  progress: number;
  title?: string;
  size?: "XS" | "SM" | "MD" | "LG";
  style?: React.CSSProperties;
  className?: string;
}

const SateCompleted: React.FC<SateCompletedProps> = ({
  progress,
  size,
  title,
  style,
  className
}) => {
  const safeProgress = Math.min(100, Math.max(0, progress));
  const sizeMap = { XS: 5, SM: 7, MD: 10, LG: 15 };
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "10px", ...style }}
      className={className}
    >
      <div className='text' style={{ fontSize: "12px", color: "#666666" }}>
        <p>{title ? title : `completed ${safeProgress}%`}</p>
      </div>
      <div
        style={{
          flex: 1,
          height: size ? `${sizeMap[size]}px` : "10px",
          backgroundColor: "#e3e3e3",
          borderRadius: "5px"
        }}
      >
        <div
          className='percent__completed'
          style={{
            width: `${safeProgress}%`,
            height: "100%",
            backgroundColor: style?.color ? style?.color : "black",
            borderRadius: "5px"
          }}
        ></div>
      </div>
    </div>
  );
};

export default SateCompleted;
