import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "./component/food";
import Bollywood from "./component/bollywood";
import Home from "./component/Home";
import Technology from "./component/technology";
import Hollywood from "./component/Hollywood";
import Fitness from "./component/Fitness";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
          <Route component={() => 404} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
