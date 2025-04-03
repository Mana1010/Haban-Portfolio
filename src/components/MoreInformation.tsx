import AboutMe from "./RightSide/AboutMe";
import Skills from "./RightSide/Skills";

import ContactUs from "./RightSide/ContactUs";
function MoreInformation() {
  return (
    <div className="flex space-x-2 w-full md:basis-[60%] lg:basis-[70%] bg-zinc-900 md:h-full flex-col p-2 rounded-lg space-y-3 px-5  overflow-y-auto">
      <AboutMe />
      <Skills />
      <ContactUs />
    </div>
  );
}

export default MoreInformation;
