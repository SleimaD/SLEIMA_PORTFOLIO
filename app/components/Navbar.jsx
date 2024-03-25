"use client"
import { bagelFatOne } from "../font"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-5 text-white bg-[#5c118150] p-5 backdrop-blur-sm shadow-xl shadow-[#a56ec350] m-0 tracking-wider text-lg">
        
        <div className={` text-[1.5rem] ${bagelFatOne.className}`}>Sleima Ducros</div>

        <div className={` flex justify-center items-center gap-8 p-2 mr-5 `}> 
            <button className={`bg-[#512d65] hover:bg-[#aa5bd1] shadow-inner text-white p-[0.5rem] px-3 rounded-xl ${bagelFatOne.className}`}><Link href="/skills">My Skills</Link></button>
            <button className={`bg-[#512d65] hover:bg-[#aa5bd1] shadow-inner text-white p-[0.5rem] px-3 rounded-xl ${bagelFatOne.className}`}><Link className=" w-full h-full" href="/works">My Works</Link></button>
            <button className={`bg-[#512d65] hover:bg-[#aa5bd1] shadow-inner text-white p-[0.5rem] px-3 rounded-xl ${bagelFatOne.className}`}><Link href="/designs">My Designs</Link></button>
        </div>

       
    </nav> 
  )     
}

export default Navbar 