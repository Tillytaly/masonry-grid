import { useState, useLayoutEffect, RefObject } from "react";
import { TUseMasonryGrid } from "./types";
import { Breakpoint } from "../../types.ts";

const defaultSettings = [
  { minWidth: 0, columns: 1 },
  { minWidth: 600, columns: 2 },
  { minWidth: 1200, columns: 4 },
];

function useMasonryGrid(
  ref: RefObject<HTMLDivElement>,
  breakpoints: Breakpoint[] = defaultSettings
): TUseMasonryGrid {
  const [columnCount, setColumnCount] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(
        (entries: ResizeObserverEntry[]) => {
          const entry = entries[0];
          const currentWidth = entry.contentRect.width;
          const currentColumnSettings = breakpoints.reduce(
            (currVal: Breakpoint, nextVal: Breakpoint) => {
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
  }, [ref, breakpoints]);

  return [columnCount];
}

export { useMasonryGrid };
