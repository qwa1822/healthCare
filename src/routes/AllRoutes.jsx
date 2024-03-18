import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
function AllRoutes({ allMenu }) {
  return (
    <Routes>
      <Route path="/" element={<Home allMenu={allMenu} />}></Route>
      <Route path="/:id" element={<Detail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

export default AllRoutes;
