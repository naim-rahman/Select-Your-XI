import dollarImg from "../../assets/dollar-1.png.svg";
import navImg from "../../assets/logo.png";

export default function Navbar({availableBalance}) {
  return (
    <>
      <div className="navbar max-w-300 mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-15 h-15" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-1">{availableBalance}</span>
          <span className="mr-1"> $USD</span>
          <img src={dollarImg} alt="#" />
        </div>
      </div>
    </>
  );
}
