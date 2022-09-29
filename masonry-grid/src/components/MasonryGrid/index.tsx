import { useMasonryGrid } from "../../helpers/hooks/useMasonryGrid";
import { useRef } from "react";
import { TMasonryGridProps } from "./Types";
import { MasonryCell } from "../MasonryCell";
import styles from "./MasonryGrid.module.scss";
const { masonryGrid } = styles;

const columnSettings = [
  { minWidth: 0, columns: 1 },
  { minWidth: 600, columns: 2 },
  { minWidth: 1200, columns: 4 },
];

const MasonryGrid = ({
  photos,
  settings,
}:
TMasonryGridProps) => {
  const masonryGridRef = useRef<HTMLDivElement>(null);
  const [columnCount] = useMasonryGrid(masonryGridRef, columnSettings);
  const { columnGap, width, rowGap } = settings;
  return (
    <div
      className={masonryGrid}
      ref={masonryGridRef}
      style={{
        columnCount,
        columnGap,
        width,
        fontSize: rowGap,
      }}
    >
      {photos.length > 0 &&
        photos.map((photo: string, index: number) => (
          <div key={photo + index} style={{ marginBottom: "10px" }}>
            <MasonryCell src={photo} />
          </div>
        ))}
    </div>
  );
};

export { MasonryGrid };
