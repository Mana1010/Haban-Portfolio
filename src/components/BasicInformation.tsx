import myself from "../../public/myself.jpg";
import blueButterfly from "../assets/blue-butterfly.png";
import redButterfly from "../assets/red-butterfly.png";
import blackButterfly from "../assets/black-butterfly.png";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
function BasicInformation() {
  return (
    <div className="flex space-x-2 w-full md:basis-[40%] lg:basis-[30%] bg-zinc-900 h-full flex-col p-2 rounded-lg space-y-2">
      <div className="flex flex-col space-y-2 justify-center items-center h-full">
        <div className="rounded-full size-[200px] mx-auto relative">
          <img
            src={myself}
            alt="myself"
            className="absolute inset-0 rounded-full"
          />
          <img
            className="absolute top-[-10px] left-3"
            src={redButterfly}
            width={60}
            height={60}
            alt="butterfly"
          />
          <img
            className="absolute bottom-[-10px] right-0"
            src={blueButterfly}
            width={80}
            height={80}
            alt="butterfly"
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <h1 className=" text-3xl poppins-semibold text-pink-600 relative">
            Oshie Mikomi Sato
            <img
              src={blackButterfly}
              alt="butterfly"
              className="absolute left-[-17.5px] top-[-20px] size-[40px]"
            />
          </h1>

          <span className="text-[0.8rem] text-pink-200">
            Frontend Developer
          </span>
          <ul className="flex items-center gap-2 justify-center pt-2">
            <a
              href="https://www.youtube.com/@oshiemikomisato691"
              className="text-white text-2xl hover:text-pink-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/oshiemikomi.sato.37"
              className="text-white text-2xl hover:text-pink-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/shie_hopee/"
              className="text-white text-2xl hover:text-pink-300"
            >
              <FaInstagram />
            </a>
            <a href="" className="text-white text-2xl hover:text-pink-300">
              <FaLinkedin />
            </a>
          </ul>
        </div>
        <div className="flex items-center justify-center w-full space-x-2 pt-5">
          <h4 className="text-pink-400">HTML |</h4>
          <h4 className="text-pink-400">REACTJS |</h4>
          <h4 className="text-pink-400">CSS |</h4>
          <h4 className="text-pink-400">JAVASCRIPT</h4>
        </div>
      </div>
    </div>
  );
}

export default BasicInformation;
