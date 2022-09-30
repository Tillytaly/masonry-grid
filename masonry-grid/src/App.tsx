import { MasonryGrid } from "./components";
import { pictures, settings } from "./dummyData";

function App() {
  return <MasonryGrid images={pictures} settings={settings} />;
}

export default App;
