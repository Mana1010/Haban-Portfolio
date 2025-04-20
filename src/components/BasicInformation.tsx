import myself from "../../public/myself.jpg";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaReact, FaGit } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
function BasicInformation() {
  return (
    <div className="flex space-x-2 w-full md:basis-[40%] lg:basis-[30%] h-full flex-col p-2 rounded-lg space-y-2 right-background">
      <div className="flex flex-col space-y-2 justify-center items-center h-full">
        <div className="flex items-center justify-center w-full space-x-4">
          <span className="text-[#D3B714] text-4xl translate-y-3.5">
            <IoLogoJavascript />
          </span>
          <span className="text-blue-500 text-4xl -translate-y-3.5">
            <FaReact />
          </span>
          <span className="text-[#037B0B] text-4xl translate-y-3.5">
            <SiDjango />
          </span>
          <span className="text-[#E73635] text-4xl -translate-y-3.5">
            <FaGit />
          </span>
        </div>
        <div className="rounded-full size-[250px] mx-auto relative bg-transparent border-y-transparent border-3 border-[#D3B714] flex items-center justify-center">
          <div className="rounded-full size-[95%] mx-auto relative bg-transparent border-y-transparent border-3 border-[#E73635] flex items-center justify-center">
            <div className="rounded-full w-[95%] mx-auto relative bg-transparent border-y-transparent border-3 border-blue-600 flex items-center justify-center">
              <img
                src={myself}
                alt="myself"
                className=" rounded-full size-[90%]"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h1 className=" text-3xl poppins-semibold text-white relative">
            Zeenith <span className="text-[#E73635]">Haban</span>
          </h1>

          <span className="text-[0.8rem] text-[#D3B714]">Web Developer</span>
          <ul className="flex items-center gap-2 justify-center pt-2">
            <a href="" className="text-white text-lg ">
              <FaLinkedin />
            </a>
            <a href="" className="text-white text-lg ">
              <FaFacebook />
            </a>
            <a href="" className="text-white text-lg">
              <FaInstagram />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BasicInformation;
