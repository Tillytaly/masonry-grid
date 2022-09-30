import { useState, useLayoutEffect, RefObject,} from "react";
import { TUseMasonryGrid, TSettings } from "./types";


const defaultSettings = [
  {minWidth: 0, columns: 1},
  {minWidth: 600, columns: 2},
  {minWidth: 1200, columns: 4},
]


function useMasonryGrid(ref: RefObject<HTMLDivElement>, settings: TSettings[] = defaultSettings): TUseMasonryGrid {
  const [columnCount, setColumnCount] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(
        (entries: ResizeObserverEntry[]) => {
          const entry = entries[0];
          const currentWidth = entry.contentRect.width;
          const currentColumnSettings = settings.reduce(
            (currVal: TSettings, nextVal: TSettings) => {
              if (
                currentWidth >= currVal.minWidth &&
                currentWidth < nextVal.minWidth
              ) {
                return currVal;
              }
              return nextVal;
            }
          );

          const { columns } = currentColumnSettings;
          setColumnCount(columns);
        }
      );

      resizeObserver.observe(ref.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [ref, settings]);

  return [columnCount];
}

export { useMasonryGrid };
