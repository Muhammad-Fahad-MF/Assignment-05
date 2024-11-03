import React from 'react'
import 'tailwindcss/tailwind.css'
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import Image from 'next/image';


export default function Home() {
  return (
      <div >
        <div className='w-full bg-[#A29875] h-[134px] flex justify-between'>
          <div className=''><h1 className='py-5 pl-[30px] pr-[30px] mr-[50px] font-rye text-[63.75px] leading-[94px] text-white'>MANZZARI</h1>
          </div>
          <div className='h-[54.6px] w-[770px] bg-[#f8f8f8] rounded-xl my-[40px] flex justify-between'>
            <input placeholder='Search for Gold Jewellery, Diamond Jewellery and more…' className='bg-[#f8f8f8] w-[600px] font-sans font-[400] text-[20px] leading-[25px] ml-[20px] my-[14px] placeholder:font-sans placeholder:border-none '></input>
            <button className='mx-[20px]'><CiSearch className='text-3xl font-bold' /></button>
          </div>
          <div className='flex my-[40px] items-center mr-[50px]'>
            <IoMdHeartEmpty className='text-[40px] mx-5 text-white'/>
            <FaRegUser className='text-[32px] mx-5 text-white'/>
            <IoCartOutline className='text-[40px] mx-5 text-white'/>
          </div>
        </div>
        <div className='mx-[100px] flex justify-between'>
          <div className='w-[496px]'>
            <h2 className='font-libre font-[500] text-[40px] leading-[66px] mt-[182px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h2>
            <h2 className='w-[870px] font-libre my-2 font-medium text-3xl leading-[49.35px] text-[#787054]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</h2>
            <button className='bg-[#A29875] text-white font-libre h-[58px] w-[288px] p-[10px] rounded-[10px] font-medium text-[30px] my-[30px]'>Explore Now</button>
          </div>
          <div >
            <Image src='/images/jewelPic.svg' alt='JewelModel' height={647} width={462} className='mt-[64px] '/>
          </div>

        </div>



      </div>

  )
}
