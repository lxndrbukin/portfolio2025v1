import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Skills from "./Skills/Skills";

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
          className="dark:hover:text-sky-500/50"
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
      <div className="flex flex-col">
        <div className="flex flex-col font-bold text-4xl">
          <span>Hi, I'm Alex</span>
          <span>Front-end Developer</span>
        </div>
        <p className="my-8">
          I enjoy learning new things, constantly improving my skills, creating
          new projects and learning new things. I enjoy listening to Rock Music,
          reading Tech-related books and learning new techologies and exploring
          the world of Web Development.
        </p>
        <Skills skills={skills} />
      </div>
      <div className="grid gap-2">
        <div className="dark:bg-sky-500/50 h-[270px] w-[270px] rounded-xl relative overflow-hidden justify-self-center">
          <img
            src="https://www.lxndrbukin.com/static/media/hellothere.3c958dea26d332d7d0d7.png"
            alt=""
            className="absolute bottom-[-19px] left-[7px]"
          />
        </div>
        <div className="flex gap-3 justify-self-center">{renderIcons()}</div>
      </div>
    </section>
  );
}
