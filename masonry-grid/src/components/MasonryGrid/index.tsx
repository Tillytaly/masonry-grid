import { useRef } from "react";
import { useMasonryGrid } from "../../hooks/useMasonryGrid";
import { MasonryGridProps } from "./types";
import { MasonryCell } from "../MasonryCell";
import styles from "./MasonryGrid.module.scss";
const { masonryGrid } = styles;

const MasonryGrid = ({ images, settings }: MasonryGridProps) => {
  const masonryGridRef = useRef<HTMLDivElement>(null);
  const { columnGap, width, rowGap, breakpoints } = settings;
  const [columnCount] = useMasonryGrid(masonryGridRef, breakpoints);

  return (
    <div
      className={masonryGrid}
      ref={masonryGridRef}
      style={{
        columnCount,
        columnGap,
        width,
      }}
    >
      {images.length > 0 &&
        images.map(({ src, alt }, index: number) => (
          <div key={src + index} style={{ marginBottom: rowGap }}>
            <MasonryCell src={src} alt={alt} />
          </div>
        ))}
    </div>
  );
};

export { MasonryGrid };
