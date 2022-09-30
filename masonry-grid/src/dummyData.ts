const DUMMY_DATA = [
  { src: "images/9.jpg" },
  { src: "images/pobrane.jpg" },
  { src: "images/2.jpg" },
  { src: "images/3.jpg" },
  { src: "images/4.jpg" },
  { src: "images/5.jpg" },
  { src: "images/6.jpg" },
  { src: "images/7.jpg" },
  { src: "images/8.jpg" },
  { src: "images/10.jpg" },
  { src: "images/11.jpg" },
  { src: "images/12.jpg" },
  { src: "images/13.jpg" },
  { src: "images/14.jpg" },
  { src: "images/15.jpg" },
  { src: "images/17.jpg" },
  { src: "images/18.jpg" },
  { src: "images/20.jpg" },
  { src: "images/21.jpg" },
  { src: "images/16.jpg" },
];

const pictures = new Array(100).fill("").map((_) => {
  const randomIndex = Math.floor(Math.random() * DUMMY_DATA.length);
  return DUMMY_DATA[randomIndex];
});

const defaultBreakpoints = [
  { minWidth: 0, columns: 1 },
  { minWidth: 600, columns: 2 },
  { minWidth: 1200, columns: 4 },
];

const settings = {
  width: "100%",
  columnGap: 10,
  rowGap: 10,
  breakpoints: defaultBreakpoints,
};

export interface MasonryGridSettings {
  width: string;
  columnGap: string;
  rowGap: string;
  breakpoints: Breakpoint[];
}

interface Breakpoint {
  minWidth: number;
  columns: number;
}

export { pictures, settings };
