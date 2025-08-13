"use client";
import Marquee from "react-fast-marquee";

const skillsList = [
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/?size=256&id=108784&format=png",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/?size=256&id=uJM6fQYqDaZK&format=png",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/?size=256&id=123603&format=png",
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/?size=256&id=13441&format=png",
  },
];

export default function Skills() {
  const renderSkills = () => {
    return skillsList.map((skill) => {
      return (
        <li className="dark:bg-[#201f2f] p-1 rounded-xl mx-1" key={skill.name}>
          <img
            className="h-[40px]"
            src={skill.icon}
            alt={skill.name}
            title={skill.name}
          />
        </li>
      );
    });
  };

  return (
    <div className=" dark:bg-[#191828] p-3 rounded-xl">
      <Marquee pauseOnHover autoFill>
        <ul className="flex">{renderSkills()}</ul>
      </Marquee>
    </div>
  );
}
