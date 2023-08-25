import { Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
// import HomeComponent from "./components/HomeComponent";
//import Day4 from "./components/Day4";
import Day5 from "./components/Day5";
import Week1 from "./components/Week1";
import Week2 from "./components/Week2";
import Week3 from "./components/Week3";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<Week3 />} />
        <Route path="/daywork" element={<Day5 />} />
        <Route path="/week1" element={<Week1 />} />
        <Route path="/week2" element={<Week2 />} />
        <Route path="/Week3" element={<Week3 />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
