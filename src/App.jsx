import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllRoutes from "./routes/AllRoutes";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import { useState } from "react";
import 어꺠 from "../src/assets/어깨.jpg";
import 운동 from "../src/assets/운동.jpg";
import 조깅 from "../src/assets/조깅.jpg";
import 코어 from "../src/assets/코어.jpg";
import 하체 from "../src/assets/하체.jpg";

import { useSelector } from "react-redux";
export const allMenu = [
  {
    id: 1,
    image: 어꺠,
    description: "어꺠운동",
  },
  {
    id: 2,
    image: 운동,
    description: "운동",
  },

  {
    id: 3,
    image: 조깅,
    description: "조깅",
  },
  {
    id: 4,
    image: 코어,
    description: "코어운동",
  },

  {
    id: 5,
    image: 하체,
    description: "하체",
  },
];
function App() {
  return (
    <div className="App">
      <TopMenu />
      <AllRoutes allMenu={allMenu} />
      <Footer />
    </div>
  );
}

export default App;
