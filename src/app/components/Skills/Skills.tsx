"use client";
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";

type Skill = {
  name: string;
  icon: string;
};

type SkillsProps = { skills: Skill[] };

export default function Skills({ skills }: SkillsProps) {
  const renderSkills = () => {
    return skills.map((skill) => {
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
    <div
      className={`dark:bg-[#191828] p-3 rounded-xl ${styles.skills} overflow-hidden`}
    >
      <Marquee pauseOnHover autoFill>
        <ul className="flex">{renderSkills()}</ul>
      </Marquee>
    </div>
  );
}
