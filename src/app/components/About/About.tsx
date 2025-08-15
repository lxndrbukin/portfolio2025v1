import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Skills from "../Skills/Skills";

const socials = [
  { name: "GitHub", icon: faGithub, url: "" },
  { name: "LinkedIn", icon: faLinkedin, url: "" },
  { name: "Instagram", icon: faInstagram, url: "" },
];

type Skill = { name: string; icon: string };

export default async function About() {
  const { data: skills } = await axios.get<Skill[]>(
    "https://lxndrbukin-github-io.vercel.app/apis/skills.json"
  );

  const renderIcons = () => {
    return socials.map((social) => {
      return (
        <a
          key={social.name}
          className="dark:hover:text-sky-500/50 height h-fit"
          target="_blank"
          href={social.url}
        >
          <FontAwesomeIcon
            icon={social.icon}
            style={{ width: "2rem", height: "2rem" }}
          />
        </a>
      );
    });
  };

  return (
    <section className="grid grid-cols-(--about-grid-cols) pt-[140px]">
      <div className="flex flex-col w-[80%] justify-self-center">
        <div className="flex flex-col font-bold text-4xl">
          <span>Hi, I'm Alex</span>
          <span>Front-end Developer</span>
        </div>
        <p className="my-8">
          I’m passionate about continuous learning, honing my skills, and
          bringing ideas to life through creative projects. I love diving into
          new technologies, exploring the ever-evolving world of web
          development, and staying curious about what’s next. Outside of coding,
          you’ll find me enjoying rock music, reading tech-related books, and
          seeking inspiration from the world around me.
        </p>
        <Skills skills={skills} />
      </div>
      <div className="grid">
        <div className="dark:bg-sky-500/50 h-[270px] w-[270px] rounded-xl relative overflow-hidden justify-self-center self-center">
          <img
            src="https://www.lxndrbukin.com/static/media/hellothere.3c958dea26d332d7d0d7.png"
            alt=""
            className="absolute bottom-[-19px] left-[7px]"
          />
        </div>
        <div className="flex gap-3 justify-self-center self-center h-fit">
          {renderIcons()}
        </div>
      </div>
    </section>
  );
}
