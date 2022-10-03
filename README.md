# Masonry Grid

This projects goal was to implement a custom Masonry Grid. Masonry grid is a layout method. In this layout elements in one axis, usually veritcal one, are placed in grid, whereas horizontal axis uses a masonry layout.

For the purpose o this task a useMasonryGrid hook was implemented, where ResizeObserver API is used to determine current size of Masonry Grid container size, and consequently to determine how many collumns should be displayed on the screen. Hook useMasonryGrid takes breakpoints as one of the argument, therefore breakpoints can be customised by the user. With no breakpoints specified, useMasonryGrid hook will use its default breakpoints: 

```
defaultBreakpoints = [
  { minWidth: 0, columns: 1 },
  { minWidth: 600, columns: 2 },
  { minWidth: 1200, columns: 4 },
];
```

Style of Masonry Grid can also be changed. User can specify column gap, row gap or grid container width. For the purpose of this task following style properties were applied:

```
const settings = {
  width: "80%",
  columnGap: 10,
  rowGap: 10,
  breakpoints: defaultBreakpoints,
};
```
All of the above Masonry Grid settings (breakpoints and styles) can be changed by adding *settings* to Masonry Grid component.

Tech stack inside of the project(besides JS and React):
[TypeScript](https://www.typescriptlang.org/),
[Sass](https://sass-lang.com/),
[ResizeObserver API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)



You can checkout my project live here [masonry-grid](https://Tillytaly.github.io/masonry-grid/).

## Installation 
In order to open the project locally make sure you have [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/package/npm) installed on your computer.

Use the console in your favourite IDE to clone the repository

```bash
git clone https://github.com/Tillytaly/masonry-grid.git
```

Navigate to the project directory:

```bash
cd .\masonry-grid\
```

Run  `npm install` to install all necessary dependencies

```bash
npm install
```

and  `npm start` to run the app in development mode

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)..
