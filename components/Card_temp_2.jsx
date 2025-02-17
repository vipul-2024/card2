import Image from "next/image";
import thumb from "../public/1stproject.jpg";
// import { FaPlay } from "react-icons/fa";
import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from '@heroicons/react/solid';
import { ThumbDownIcon } from '@heroicons/react/solid';






export default function Card_temp_1({ toggle, settoggle }) {
  return (
    <div className="md:w-[50rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
        <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
          <h1>Bookerr App</h1>
        </div>
        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          <Image
            src={thumb}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className=" rounded-2xl"
          />
        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">Developer/Designer</p>
        <h1 className="m-2 text-4xl font-bold dark:text-white">
          Bookerr App
        </h1>

      <div className=" pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">
          <div className="flex flex-row items-center m-2">
            <h1 className="pl-1 dark:text-white"></h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <h1 className="pl-1 dark:text-white"></h1>
          </div>
        </div>

        <div className="flex flex-row">
          <button className="md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300" 
          >
            <h1 className="text-white text-md font-semibold pl-2">
              {/* project link Here*/}
             <a href="https://bookerrquiz.vercel.app/"> View Project</a>
            </h1>
          </button>

          {/* like and dislike button */}
          
          <button
            className="md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300 " 
            onClick={() => settoggle(!toggle) }
          >
            {toggle ? (
              <MoonIcon className="h-5 w-5 text-white " />
            ) : (
              <SunIcon className="h-5 w-5 text-white " />
            )}
          </button>
         
        </div>
        {/* like and dislike button */}
        <div className="flex justify-start items-center pt-3 pl-2 pr-2">
        <p>10</p>
        <button 
            className="md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a] p-2.5 rounded-xl  justify-center items-center hover:bg-[#424bb6] ease-linear duration-300 " 
          >
           
            {toggle ? (
              <ThumbUpIcon className="h-5 w-5 text-white "  />
            ) : (
              <ThumbUpIcon className="h-5 w-5 text-white" />
            )}
          </button>
          <p>10</p>
          <button
            className="md:m-2 m-auto mt-8 bg-[#5865F2] shadow-md shadow-[#5865f28a] p-2.5 rounded-xl  justify-center items-center hover:bg-[#424bb6] ease-linear duration-300"
          >
            {toggle ? (
              <ThumbDownIcon className="h-5 w-5 text-white" />
            ) : (
              <ThumbDownIcon className="h-5 w-5 text-white" />
            )}
          </button>
          </div>
      </div>
    </div>
  );
}
