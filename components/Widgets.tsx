import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function Widgets() {
  return (
    <div className='p-3 flex flex-col space-y-4 w-[400px]'>

      <div className='bg-[#eff3f4] text-[#899590] h-[44px] flex items-center space-x-3 rounded-full'>
        <MagnifyingGlassIcon className='w-[20px] h-[20px] ml-5' />
        <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none'/>
      </div>

      <div className='bg-[#eff3f4] rounded-xl p-3'>

        <h1 className='text-x1 font-bold mb-2'>
          What's Happening?
        </h1>

        <div className='flex flex-col py-3'>

          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
          </div>
          <span className='font-bold text-m'>Oblivion</span>
          <span className='text-[#536471] text-xs'>240k Post</span>
        
        </div>

        <div className='flex flex-col py-3'>

          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
          </div>
          <span className='font-bold text-m'>PinkPantheress</span>
          <span className='text-[#536471] text-xs'>14k Post</span>
        
        </div>

        <div className='flex flex-col py-3'>

          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
          </div>
          <span className='font-bold text-m'>#ReactJS</span>
          <span className='text-[#536471] text-xs'>240k Post</span>
        
        </div>

        <div className='flex flex-col py-3'>

          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
          </div>
          <span className='font-bold text-m'>Marathon</span>
          <span className='text-[#536471] text-xs'>76k Post</span>
        
        </div>

      </div>

      <div className='bg-[#eff3f4] rounded-xl p-3 w-full'>

        <h2 className='text-l font-bold mb-2'>
          Who To Follow
        </h2>

        <WhoToFollowUser />
        <WhoToFollowUser />
        <WhoToFollowUser />
        <WhoToFollowUser />

      </div>

    </div>
  )
}


export function WhoToFollowUser() {
  return (
    <div className='flex space-x-3 my-3 items-center'>
      <Image src={'/assets/images/profile-pic.svg'} width={44} height={44} alt={'Profile-Pic'} />

      <div className='flex justify-between flex-grow items-center'>
        <div className='flex flex-col'>
          <span className='font-bold'>Jordan Walker</span>
          <span className='text-sm text-[#536471]'>@prism</span>
        </div>

        <button className='bg-[#0f1419] text-white text-sm rounded-full w-[72px] h-[36px]'>
          Follow
        </button>
      </div>

    </div>
  )
}