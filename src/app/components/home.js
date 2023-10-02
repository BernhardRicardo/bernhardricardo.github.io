import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import deved from "../../../public/dev-ed-wave.png";

export default function Home() {
  return (
    <section className="min-h-screen" id="home">
      <div className="text-center">
        <h2 className="text-2xl md:text-5xl py-8 pt-16 text-teal-600 font-medium  ">
          Bernhard Ricardo Putranto
        </h2>
        <h3 className="text-2xl md:text-3xl py-2">Web Developer</h3>
        <p className="text-md py-5 leading-8 md:text-base text-gray-800">
          Hi there! I'm a final-year Computer Science student based in
          Darmstadt, Germany. I'm passionate about building web applications.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 text-gray-600">
        <a
          href="https://www.linkedin.com/in/bernhard-ricardo-putranto/"
          target="_blank"
          className="text-4xl text-black hover:text-black mx-2"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/BernhardRicardo"
          target="_blank"
          className="text-4xl text-black hover:text-black mx-2"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-10 overflow-hidden">
        <Image src={deved} alt="dev ed" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
}
