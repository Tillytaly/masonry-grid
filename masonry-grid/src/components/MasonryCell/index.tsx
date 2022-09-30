import { IMasonryCellProps } from "./types";

const MasonryCell = ({ src, alt }: IMasonryCellProps) => {
  return <img src={src} alt={alt} style={{ width: "100%" }}></img>;
};

export { MasonryCell };
