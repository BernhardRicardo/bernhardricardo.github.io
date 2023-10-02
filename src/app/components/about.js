import Image from "next/image";
import dockerlogo from "../../../public/docker.png";
import githublogo from "../../../public/github.png";
import javalogo from "../../../public/java.png";
import javascriptlogo from "../../../public/javascript.png";
import phplogo from "../../../public/php.png";
import postgresqllogo from "../../../public/postgresql.png";
import reactlogo from "../../../public/react.png";
import tailwindlogo from "../../../public/tailwind.png";

export default function About() {
  return (
    <section className="min-h-screen flex items-center" id="about">
      <div className=" pb-24">
        <h2 className="text-5xl text-teal-600 font-medium">About me</h2>
        <p className="text-md py-5 leading-8 text-gray-800 text-justify">
          I am a final-year Computer Science student deeply passionate about
          technology and innovation. My journey through this field has equipped
          me with a diverse skill set, including expertise in React, a front-end
          JavaScript library that enables me to create dynamic and user-friendly
          web applications. With proficiency in React and other programming
          languages, I thrive on crafting elegant code and enhancing user
          experiences. My experiences span algorithm design, software
          development, and web technologies, and I'm always eager to explore
          emerging trends and technologies. I welcome new collaborations and
          opportunities to transform concepts into reality, one line of code at
          a time.
        </p>
        <div className="flex flex-wrap justify-end">
          <div className="flex flex-col items-center justify-center p-5">
            <Image src={reactlogo} alt="react logo" width={50} height={50} />
          </div>
          <div className="flex flex-col items-center justify-center p-5">
            <Image
              src={javascriptlogo}
              alt="javascript logo"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col items-center justify-center p-5">
            <Image src={phplogo} alt="php logo" width={50} height={50} />
          </div>
          <div className="flex flex-col items-center justify-center p-5">
            <Image src={javalogo} alt="java logo" width={50} height={50} />
          </div>
          <div className="flex flex-col items-center justify-center p-5">
            <Image
              src={tailwindlogo}
              alt="tailwind logo"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col items-center justify-center p-5">
            <Image
              src={postgresqllogo}
              alt="postgresql logo"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col items-center justify-center p-5">
            <Image src={githublogo} alt="github logo" width={50} height={50} />
          </div>
          <div className="flex flex-col items-center justify-center p-5">
            <Image src={dockerlogo} alt="docker logo" width={50} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
