import React from 'react'
import Image from 'next/image'
import { ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Post() {
  return (
    <>
      <div>
          <PostHeader />
      </div>

      <div className='flex ml-16 p-3 space-x-14'>
        <div className='relative'>
          <ChatBubbleOvalLeftEllipsisIcon className='w-[22px] h-[22px] cursor-pointer hover:text-[#f4af01] hover:opacity-50 transition' />
          <span className='absolute text-xs top-1 right-0 -right-4'>2</span>
        </div>
        <div className='relative'>
          <HeartIcon className='w-[22px] h-[22px] cursor-pointer hover:text-[#f4af01] hover:opacity-50 transition' />
          <span className='absolute text-xs top-1 right-0 -right-4'>2</span>
        </div>
        <div className='relative'>
          <ChartBarIcon className='w-[22px] h-[22px] hover:cursor-not-allowed' />
        </div>
        <div className='relative'>
          <ArrowUpTrayIcon className='w-[22px] h-[22px] hover:cursor-not-allowed' />
        </div>
      </div>
    </>
  )
}


export function PostHeader() {
    return (
        <div className='flex items-center my-2 mx-4'>
            <Image src='/assets/images/profile-pic.svg' width={44} height={44} alt='Profile Pictures' className='w-11 h-11'/>

            <div className='flex flex-col mx-2 text-[15px]'>

              <div className='flex items-center'>  
                <span className='font-bold mr-1 text-[#of1419] whitespace-nowrap overflow-hidden text-ellipsis inline-block max-[60px] min-w-[400px]:max-w-[100px] min-w-[500px]:max-w-[140px] sm:max-w-[160px]'>Guest guest guest</span>
                <span className='text-sm mr-1 whitespace-nowrap overflow-hidden text-ellipsis inline-block max-[60px] min-w-[400px]:max-w-[100px] min-w-[500px]:max-w-[140px] sm:max-w-[160px]'>@guest0000234</span>
                <span className='text-[12px] mr-1 opacity-50'>•</span>
                <span className='text-sm text-right'>a day ago</span>
              </div>
              
              <span>Go watch Sinners! Such a good movie</span>
            </div>
        </div>
    );
}