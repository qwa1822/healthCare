import 어꺠 from "../assets/어깨.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allMenu } from "../App";
import { checked } from "../redux/init";
function Detail() {
  const params = useParams();
  const { id } = params;

  const menu = allMenu.find(item => Number(item.id) === Number(id));
  if (!menu) {
    return <div>해당 메뉴를 찾을 수 없습니다.</div>;
  }
  const dispatch = useDispatch();

  const Adding = item => {
    dispatch(checked(item));
  };
  return (
    <div className="max-w-5xl mx-auto min-h-screen">
      <div className="w-full md:flex md:justify-between">
        <div className="w-full px-10  flex justify-center items-center mx-auto">
          <img
            src={menu.image}
            alt=""
            className="w-[300px] h-[500px] object-cover"
          />
        </div>
        <div className="w-full m-4 px-5 flex flex-col justify-center items-center md:space-y-4 space-y-0">
          <h2 className="px-2 w-full text-center text-white bg-black rounded-xl py-3 ">
            {menu.description}
          </h2>
          <span className="line-clamp-5 py-2 text-slate-500 text-base space-x-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            expedita totam eum. Iusto culpa quidem, porro consequuntur optio
            veritatis quod architecto rem, impedit dignissimos debitis labore a
            at dolorem quibusdam.
          </span>
          <button
            onClick={() => Adding(menu)}
            className="px-10
           hover:scale-110  text-center translate-y-5 hover:translate-y-0 transition-all duration-200  block bg-pink-300 rounded-xl text-white py-4"
          >
            담기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
