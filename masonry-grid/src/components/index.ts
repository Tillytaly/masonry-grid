export { MasonryCell } from "./MasonryCell/index";
export { MasonryGrid } from "./MasonryGrid/index";

const DUMMY_DATA = [
  "images/9.jpg",
  "images/pobrane.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/17.jpg",
  "images/18.jpg",
  "images/20.jpg",
  "images/21.jpg",
  "images/16.jpg",
];

const pictures = new Array(100).fill("").map((_) => {
  const randomIndex = Math.floor(Math.random() * DUMMY_DATA.length);
  return DUMMY_DATA[randomIndex];
});

export { pictures };
