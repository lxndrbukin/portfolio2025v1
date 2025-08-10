import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-16">
      <Header />
      <div className="p-[20px]">
        <About />
      </div>
    </div>
  );
}
