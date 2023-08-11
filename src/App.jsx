import { Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import HomeComponent from "./components/HomeComponent";
//import Day4 from "./components/Day4";
import Day5 from "./components/Day5";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/daywork" element={<Day5 />} />
      </Routes>
    </div>
  );
}

export default App;
