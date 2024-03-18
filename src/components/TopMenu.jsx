import 어꺠 from "../assets/어깨.jpg";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
function TopMenu() {
  const state = useSelector(state => state.count);

  return (
    <div className=" md:flex border-b-2 md:justify-between justify-center items-center gap-2 max-w-5xl mx-auto my-7 ">
      <div className="w-full  flex justify-center md:justify-start  items-center mb-2">
        <img src={어꺠} alt="" className="h-10 w-10 rounded-xl object-cover" />
        <p className="font-bold text-base ml-2">Health</p>
      </div>
      <div className="w-full  flex md:justify-start justify-center">
        <NavLink
          to="/"
          className="border border-red-200 bg-red-200 text-white rounded-xl hover:bg-violet-400 transition-all duration-200 px-2 mr-2"
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className="border border-red-200 bg-red-200  text-white rounded-xl hover:bg-violet-400 transition-all duration-200 px-2"
        >
          Cart
        </NavLink>
      </div>
      <div className="flex md:w-60  justify-center ">
        <span className="font-bold text-base ">{state.length}리스트</span>
      </div>
    </div>
  );
}

export default TopMenu;
