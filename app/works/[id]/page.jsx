"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import worksData from './../../json/works.json'
import Image from 'next/image';
import { bagelFatOne } from '@/app/font';
import Link from 'next/link';



const WorkDetail = ({
  params:{id}
}) => {
  const router = useRouter();
  const [work, setWork] = useState(worksData);
  
  
    return (
      <div className='relative mb-[6rem] '>
  
        <button className={` absolute top-[-2rem] left-16 tracking-wider rounded-2xl shadow-inner text-white p-3 px-4 bg-[#671e67] hover:bg-[#411b41] ${bagelFatOne.className}`}> <Link href="/works">Go Back</Link> </button>

        <div className=' w-full flex justify-center items-center mt-[6rem]'> 
        <h1 className={` text-white text-[3rem] tracking-wider ${bagelFatOne.className}`}>{worksData[id].name}</h1> 
        </div>

        <div className='flex justify-center items-center gap-16'>
          <div className='shadow-white shadow-lg w-[25rem] h-[17rem] bg-transparent rounded-xl mt-[6rem]'>
            <div className={`bg-[#3d1a4f] w-[25rem] h-[17rem] rounded-xl shadow-inner`}>
              <Image src={worksData[id].image} width={1400} height={850} alt={work.alt} />
            </div>
          </div>
          
          <div className='text-white flex flex-col gap-5 w-[35%] justify-center mt-10'>
            <p className={` tracking-wider text-2xl ${bagelFatOne.className}`}>description : <span className=' font-mono text-[1.5rem]'>{worksData[id].description}</span></p>
            <p className={` tracking-wider text-2xl ${bagelFatOne.className}`}>challenges : <span className=' font-mono text-[1.5rem]'>{worksData[id].challenges}</span></p>
            <p className={` tracking-wider text-2xl ${bagelFatOne.className}`}>Tools : <span className=' font-mono text-[1.5rem]'>{worksData[id].tools}</span></p>
          </div>
        </div>
        
        <div className=' w-full flex justify-center items-center mt-[6rem]'>
          <a className={` tracking-wider text-white bg-[#2d102f5d] hover:bg-[#2d102fb9] border-[#94399a] border-2 rounded-2xl p-3 ${bagelFatOne.className}`} href={worksData[id].websiteUrl} target="_blank" rel="noopener noreferrer">Visit website</a>
        </div>
         
      </div>
    );
};
   

export default WorkDetail;





