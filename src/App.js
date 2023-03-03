import { Navigation } from "./components/pages/home/navigation";
import { Movies } from "./components/pages/home/movies";
import "./App.css";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1300,
  speedAsDuration: true,
});

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
