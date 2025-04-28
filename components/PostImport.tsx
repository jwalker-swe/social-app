import React from 'react';
import Image from 'next/image';
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function PostImport() {
  return (
    <div className='flex space-x-5 p-3 border-2 border-opacity-10'>
        <Image src={"/assets/images/site-logo.svg"} width={44} height={44} alt='logo' className='w-11 h-11'/>
        <div className='w-full'>
            <textarea className='resize-none outline-none w-full min-h-[50px] text-lg border-b-2 border-opacity-10' placeholder='Enter Message...'/>
            <div className='flex justify-between items-center'>
                <div className='flex space-x-1.5'>
                    <PhotoIcon className='w-[22px] h-[22px] text-[#f4af01] cursor-pointer hover:opacity-50 transition'/>
                    <ChartBarIcon className='w-[22px] h-[22px] text-[#f4af01] cursor-pointer hover:opacity-50 transition'/>
                    <FaceSmileIcon className='w-[22px] h-[22px] text-[#f4af01] cursor-pointer hover:opacity-50 transition'/>
                    <CalendarIcon className='w-[22px] h-[22px] text-[#f4af01] cursor-pointer hover:opacity-50 transition'/>
                    <MapPinIcon className='w-[22px] h-[22px] text-[#f4af01] cursor-pointer hover:opacity-50 transition'/>
                </div>
                <button className='bg-[#f4af01] text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer'>
                    Button
                </button>
            </div>
        </div>
    </div>
  )
}
