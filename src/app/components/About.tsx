export default function About() {
  return (
    <section className="grid grid-cols-(--about-grid-cols) pt-[140px]">
      <div>
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
      </div>
      <div className="grid">
        <div className="dark:bg-sky-500/50 h-[270px] w-[270px] rounded-xl relative overflow-hidden justify-self-end">
          <img
            src="https://www.lxndrbukin.com/static/media/hellothere.3c958dea26d332d7d0d7.png"
            alt=""
            className="absolute bottom-[-19px] left-[7px]"
          />
        </div>
      </div>
    </section>
  );
}
