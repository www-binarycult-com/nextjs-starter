import { ReactNode } from 'react';

type PositionTypes = {
  position?: number;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
} | null;

export const TechBox = ({ position }: { position: PositionTypes }) => {
  return (
    <div
      className={`z-1 rounded block absolute top-0 left-0 w-full h-full transition-all duration-500 hidden md:block ${
        position?.height && 'animate-leftRightService'
      }`}
      style={{
        top: position?.top,
        left: position?.left,
        width: position?.width,
        height: position?.height,
      }}
    >
      <div
        className={`bg-white w-full h-full block absolute top-0 left-0  ${
          position?.height && 'animate-upDownService   '
        }`}
      />
    </div>
  );
};
