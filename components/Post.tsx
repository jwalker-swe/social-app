import React from 'react'
import Image from 'next/image'

export default function Post() {
  return (
    <div>
        <PostHeader />
    </div>
  )
}


export function PostHeader() {
    return (
        <div className='flex items-center my-2 mx-4'>
            <Image src='/assets/images/profile-pic.svg'
            width={44}
            height={44}
            alt='Profile Pictures'
            />

            <div className='flex flex-col mx-2'>

              <div className='flex items-center'>  
                <span className='font-bold mr-1'>Guest</span>
                <span className='text-sm mr-1'>@guest0000234</span>
                <span className='text-sm text-right'>a day ago</span>
              </div>
              
              <span>Go watch Sinners! Such a good movie</span>
            </div>
        </div>
    );
}