"use client"
import React from 'react'
import { bagelFatOne } from '../font'
import Image from 'next/image'
import Link from 'next/link'
import worksData from './../json/works.json'
import { useRouter } from 'next/navigation'

const Works = () => {
    const router = useRouter()

  return (
    <div className={` relative text-white mt-[5rem] mb-16 `}>
        <button className={` absolute top-[-4rem] max-[400px]:top-[-5rem] left-16 tracking-wider rounded-2xl shadow-inner text-white p-3 px-4 bg-[#671e67] hover:bg-[#411b41] ${bagelFatOne.className}`}> <Link href="/">Go Back</Link> </button>
        <div className={`text-[5rem] mt-[10rem] ms-[10rem] max-[400px]:ms-[5rem] max-[400px]:text-[3rem] flex w-[80%] justify-start mb-16 tracking-wider ${bagelFatOne.className}`}>
            My Works
        </div>                                    
        <div className='flex justify-center w-full'>   
            <div className={`p-3 flex gap-9 w-[90%] mb-[5rem] flex-wrap justify-center`}>
                {worksData.map((element) => (  
                    <div key={element.alt} className={`bg-[#6a2e88] w-[25rem] h-[21rem] rounded-xl shadow-inner`}>
                        <Image src={element.image} width={1400} height={850} alt={element.alt} /> 
                        <div className={` flex justify-center tracking-wider mt-2 mb-2 ${bagelFatOne.className}`}>{element.alt}</div>
                        <div className='flex justify-center items-center gap-14  p-3'>
                           <a href={element.websiteUrl} target='_blank' className={` tracking-wider bg-[#512d65] hover:bg-[#aa5bd1] p-2 px-3 rounded-xl shadow-inner  ${bagelFatOne.className}`}>visit website</a>
                            <button className={` tracking-wider bg-[#512d65] hover:bg-[#aa5bd1] p-2 px-3 rounded-xl shadow-inner  ${bagelFatOne.className}`} onClick={() => {router.push(`/works/${element.id}`)}}>
                                    details
                            </button>
                        </div>                                           
                    </div>
                ))}
                           
            </div>
        </div>  
    </div>
  )     
}      
                                  
export default Works  