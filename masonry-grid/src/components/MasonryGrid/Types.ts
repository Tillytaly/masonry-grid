import { Breakpoint } from "../../types.ts";

export interface MasonryGridSettings {
  width: string;
  columnGap?: string | number;
  rowGap?: string | number;
  breakpoints?: Breakpoint[];
}

interface Img {
  src: string;
  alt?: string;
}

export interface MasonryGridProps {
  images: Img[];
  settings: MasonryGridSettings;
}
