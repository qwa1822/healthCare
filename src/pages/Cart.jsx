import { useSelector } from "react-redux";
import 어깨 from "../assets/어깨.jpg";

function Cart() {
  const state = useSelector(state => state.count);

  let copy = state.filter(item => item.description !== "");

  return (
    <div className="max-w-5xl mx-auto min-h-screen">
      <h2 className="text-center font-bold my-2">헬스찜목록</h2>
      <div className="flex md:grid md:grid-cols-2  md:gap-2 space-y-5 md:space-y-0  border-purple-300 rounded-xl shadow-md flex-col ">
        {copy.length >= 1 ? (
          copy.map(item => (
            <div className="flex border border-purple-300 transition-all hover:scale-110 duration-200">
              <div className="w-1/2 justify-center my-auto">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover h-[300px]"
                />
              </div>
              <div className="w-1/2 ml-2 text-center ">
                <h2 className="px-2 py-4 font-bold text-base">
                  {item.description}
                </h2>
                <span className="text-base font-sans text-slate-400 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae est tempora voluptate sit commodi, soluta at optio
                  ducimus quia! Asperiores fugit error perspiciatis, fuga
                  architecto laudantium sunt ab eaque laborum.
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center flex-col items-center">
            <div className="border text-center px-10 py-10 flex bg-red-300 rounded-xl text-white text-xl ">
              존재 하지 않습니다
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
