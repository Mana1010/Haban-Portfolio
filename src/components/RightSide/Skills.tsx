import React from "react";

import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiTeamFill, RiBrushAiFill } from "react-icons/ri";
function Skills() {
  const skills = [
    {
      name: "UI/UX Design",
      description:
        "Focused on crafting visually appealing and user-centered designs using Tailwind CSS and Figma, with an emphasis on enhancing usability and creating seamless user experiences",
      icon: <LuLayoutDashboard />,
    },
    {
      name: "Collaboration",
      description:
        "Effective team player with strong collaboration skills, fostering open communication, adaptability, and mutual respect. Experienced in working with diverse teams, sharing ideas, and contributing to a positive and productive work environment.",
      icon: <RiTeamFill />,
    },
    {
      name: "Communication",
      description:
        "Strong communicator with the ability to clearly articulate ideas, collaborate effectively in teams, and actively listen to others. Skilled in fostering positive relationships and ensuring smooth, efficient communication in both technical and non-technical environments",
      icon: <MdOutlinePhoneInTalk />,
    },
    {
      name: "Creative",
      description:
        " Highly creative with a strong ability to think outside the box, solve problems innovatively, and bring unique ideas to life. Passionate about designing engaging experiences and finding new approaches to enhance functionality and aesthetics.",
      icon: <RiBrushAiFill />,
    },
  ];
  return (
    <div className="flex flex-col space-y-1.5">
      <h1 className=" text-pink-300 text-2xl poppins-semibold">MY SKILLS</h1>
      <div className="grid grid-cols-1 items-center gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#2A2627] p-5 flex items-center flex-col justify-center space-y-1 rounded-md"
          >
            <span className="text-pink-500 text-5xl">{skill.icon}</span>
            <h3 className="text-pink-600 poppins-semibold text-xl">
              {skill.name}
            </h3>
            <p className="text-[0.8rem] poppins-thin text-[#F0F1F3] text-center">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
