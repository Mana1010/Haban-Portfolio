function Skills() {
  const skills = [
    {
      name: "Teamwork",
      description:
        "Able to collaborate effectively with others to reach common goals, contribute ideas, and support teammates in a group setting.",
      colortext: "#D3B714",
    },
    {
      name: "Adaptability",
      description:
        "Quick to adjust to new tools, challenges, or environments. Comfortable learning new technologies and staying flexible in fast-paced situations.",
      colortext: "#E73635",
    },
    {
      name: "Problem-Solving",
      description:
        " Skilled at analyzing issues, identifying efficient solutions, and debugging code to create smooth and functional applications.",
      colortext: "#037B0B",
    },
  ];

  return (
    <div className="flex flex-col space-y-1.5">
      <h1 className=" text-[#E73635] text-2xl poppins-semibold">My Skills</h1>
      <div className="grid grid-cols-3 items-center gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-5 flex items-center flex-col justify-center space-y-1 rounded-md"
          >
            <h3
              style={{ color: `${skill.colortext}` }}
              className={` poppins-semibold text-xl`}
            >
              {skill.name}
            </h3>
            <p className="text-[0.85rem] poppins-thin text-[#F0F1F3] text-center leading-6">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
