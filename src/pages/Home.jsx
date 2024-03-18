import { useState } from "react";
import 어꺠 from "../assets/어깨.jpg";
import 운동 from "../assets/운동.jpg";
import 조깅 from "../assets/조깅.jpg";
import 코어 from "../assets/코어.jpg";
import 하체 from "../assets/하체.jpg";
import { useSelector, useDispatch } from "react-redux";
import { checked } from "../redux/init";

import { useNavigate } from "react-router-dom";
function Home({ allMenu }) {
  const countState = useSelector(state => state.count);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonClick = item => {
    dispatch(checked(item));
  };

  console.log(countState);

  return (
    <div className="max-w-5xl md:grid md:grid-cols-3 min-h-screen container mx-auto">
      {allMenu.length > 0 &&
        allMenu.map(item => (
          <>
            <div
              onClick={() => navigate(`/${item.id}`)}
              className="flex flex-col items-center justify-between   m-5 border rounded-xl border-black"
            >
              <div>
                <img src={item.image} alt="" className="w-50 h-50 rounded-xl" />
              </div>
              <div className="flex items-center w-full justify-center">
                <span className="text-xl font-bold font-sans mt-3">
                  {item.description}
                </span>
              </div>
              <div className="flex items-center w-full m-3 px-3 justify-between">
                <div className="px-2 bg-black text-white rounded-xl  ">
                  {item.description}
                </div>
                <button
                  onClick={() => buttonClick(item)}
                  className="px-2 bg-blue-300 rounded-xl h-auto hover:bg-red-500 transition-all hover:scale-110 duration-300 text-white py-3"
                >
                  Go To Detail
                </button>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default Home;
