import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image"
import deved from "../../../public/dev-ed-wave.png"

export default function Home() {
    return (
        <section>
          <div className="text-center">
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Bernhard Ricardo Putranto</h2>
          <h3 className='text-2xl py-2'>Software Engineer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>I'm a software engineer based in Jakarta, Indonesia specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 text-gray-600">
          <a href="https://www.linkedin.com/in/bernhardricardoputranto/" target="_blank" className="text-4xl text-black hover:text-black mx-2"><AiFillLinkedin /></a>
          <a href="https://google.com" target="_blank" className="text-4xl text-black hover:text-black mx-2"><AiFillGithub /></a>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={deved} alt="dev ed" layout='fill' objectFit='cover' />
        </div>
        </section>
    )
}