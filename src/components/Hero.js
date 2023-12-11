import HeroImage from "../assets/images/HeroImage.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Hero = () => {
  return (
    
    <section className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-5xl font-bold tracking-wider">I'm Mohammadali</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            React Developer
          </p>
          <p className="mt-2 text-lg text-sky-700 capitalize tracking-wide">
            Reprehenderit officia velit officia Lorem exercitation duis quis
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={HeroImage} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
