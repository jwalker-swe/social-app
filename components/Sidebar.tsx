import React from 'react'
import { 
    HomeIcon,
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    UserIcon,
    EllipsisHorizontalCircleIcon
 } from '@heroicons/react/24/outline'
 import Image from 'next/image'

export default function Sidebar() {
  return (
    <nav className='hidden sm:flex flex-col sticky top-0 p-3 h-screen xl:ml-20'>
        <div className='relative h-full'>
            <div className='py-3'>
                <Image src={'/assets/images/site-logo.svg'} width={48} height={48} alt='logo' />
            </div>
            <ul>
                <SidebarLink text='Home' Icon={HomeIcon}/>
                <SidebarLink text='Explore' Icon={HashtagIcon}/>
                <SidebarLink text='Notifications' Icon={BellIcon}/>
                <SidebarLink text='Messages' Icon={InboxIcon}/>
                <SidebarLink text='Bookmarks' Icon={BookmarkIcon}/>
                <SidebarLink text='Profile' Icon={UserIcon}/>
                <SidebarLink text='More' Icon={EllipsisHorizontalCircleIcon}/>
                <button className='hidden xl:block bg-[#f4af01] w-[200px] h-[52px] rounded-full text-white font-medium cursor-pointer shadow-md mt-2'>
                    Bumble
                </button>
            </ul>
            <div className='absolute bottom-0'>
                User Info
            </div>
        </div>
    </nav>
  );
}

interface SidebarLinkProps {
    text: string,
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
    >;
}

function SidebarLink({ text, Icon }: SidebarLinkProps) {
    return (
        <li className='flex items-center text-xl mb-2 space-x-3 p-2.5'>
            <Icon className='h-7' />
            <span className='hidden xl:block'>{text}</span>
        </li>
    )
}