export interface MasonryGridSettings {
    width: string;
    columnGap?: string | number;
    rowGap?: string | number;
    breakpoints?: Breakpoint[];
  }
  
  interface Breakpoint {
    minWidth: number;
    columns: number;
  }

  interface Img {
    src: string,
    alt?:string;
  }
  
  export interface MasonryGridProps {
    images: Img[];
    settings: MasonryGridSettings;
  }
  
