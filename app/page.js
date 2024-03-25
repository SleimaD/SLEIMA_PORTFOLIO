import Image from "next/image";
import Link from "next/link";
import { bagelFatOne } from "@/app/font";

export default function Home() {
  return (
    <main className=" w-full flex min-h-screen flex-col overflow-x-hidden ">
      <div className=" mt-[2rem] max-[400px]:mt-[9rem] ms-[10rem] flex justify-start">
        <p className={`text-white max-[400px]:text-[2rem] text-[3rem] ${bagelFatOne.className}`}>Hello 👋,</p> 
      </div>      
      <div className=" w-full flex justify-center items-center  ">
        <p className={`text-white text-center text-[4rem] max-[400px]:text-[2rem] font-bold uppercase ${bagelFatOne.className}`}>Welcome to <br /> my <br /> 
        <span className=" text-[7.5rem] max-[400px]:text-[2.5rem] text-[#dfa1fd] ">PORTFOLIO</span> </p>
      </div>
      <div className="mb-10 relative">
        <p className={`text-[2.5rem] absolute right-[25rem] top-[-2rem] text-[#dfa1fd] ${bagelFatOne.className}`}> &#10094; / &#10095; </p>
      </div> 
    </main>
  );
}
