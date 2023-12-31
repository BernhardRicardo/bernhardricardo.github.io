import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import bernhard from "../../../public/bernhard.jpg";
import cv from "../../../public/cv.png";

export default function Home() {
  return (
    <section className="" id="home">
      <div className="text-center">
        <h2 className="text-2xl md:text-5xl py-8 text-teal-600 font-medium  ">
          Bernhard Ricardo Putranto
        </h2>
        <h3 className="text-2xl md:text-3xl py-2">Web Developer</h3>
        <p className="text-md py-5 leading-8 md:text-base text-gray-800">
          Hi there! I&apos;m a final-year Computer Science student based in
          Darmstadt, Germany. I&apos;m passionate about building web
          applications.
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
        {/* cv icon */}
        <a
          href="../../..//CV_Putranto.pdf"
          target="_blank"
          className="text-4xl text-black hover:text-black mx-2"
        >
          <Image src={cv} alt="cv" width={35} height={35} />
        </a>
        <a
          href="https://github.com/BernhardRicardo"
          target="_blank"
          className="text-4xl text-black hover:text-black mx-2"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b rounded-full w-60 h-60 mt-10 overflow-hidden">
        <Image src={bernhard} alt="dev ed" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
}
