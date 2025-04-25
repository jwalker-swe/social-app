import PostImport from '@/components/PostImport'
import React from 'react'

export default function PostFeed() {
  return (
    <div className='flex-grow border-2 border-black max-w-2xl'>
        <div className='py-4 px-3 text-lg sm:text-xl sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm font-bold'>
            Home
        </div>
        <PostImport />
    </div>
  )
}
