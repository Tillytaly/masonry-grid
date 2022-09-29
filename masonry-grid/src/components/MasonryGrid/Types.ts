export interface TMasonryGridProps {
  photos: string[];
  settings: TMasonryGridSettings;
}

type TMasonryGridSettings = {
  width?: string | number;
  columnGap?: number;
  rowGap?: number;
};
