import Image from "next/image"
import web1 from "../../../public/web1.png"
export default function Projects() {
    return (
        <section>
            <div className="text-center">
                <h2 className='text-5xl py-2 text-teal-600 font-medium'>Projects</h2>
                <p className='text-md py-5 leading-8 text-gray-800'>Here are some of my projects that I've been working on.</p>
            </div>
            <div className="flex flex-col max-w-4xl w-full lg:gap-28 mx-auto gap-5">
                <div className="bg-white shadow-lg rounded-lg flex lg:flex-row flex-col mx-auto">
                    <div className="w-full h-full min-h-min">
                        <Image src={web1} alt="Warehouse Management System" layout='relative' objectFit='cover'/>
                    </div>
                    <div className="lg:w-8/12 flex flex-col justify-between">
                        <div className="p-4">
                            <h1 className="font-bold lg:text-xl text-sm mb-2">Warehouse Management System</h1>
                            <p className="text-gray-700 lg:text-base text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!</p>
                        </div>
                        <div className="">
                            <div className="flex p-4 border-t justify-end border-gray-300 text-gray-700">
                                <div className="flex-none inline-flex items-center">
                                    <a href="#" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-sm">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg flex lg:flex-row flex-col mx-auto">
                    <div className="w-full h-full min-h-min">
                        <Image src={web1} alt="Warehouse Management System" layout='relative' objectFit='cover'/>
                    </div>
                    <div className="lg:w-8/12 flex flex-col justify-between">
                        <div className="p-4">
                            <h1 className="font-bold lg:text-xl text-sm mb-2">Warehouse Management System</h1>
                            <p className="text-gray-700 lg:text-base text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!</p>
                        </div>
                        <div className="">
                            <div className="flex p-4 border-t justify-end border-gray-300 text-gray-700">
                                <div className="flex-none inline-flex items-center">
                                    <a href="#" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-sm">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>	
        </section>
    )
}