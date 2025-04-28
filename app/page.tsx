import Sidebar from '@/components/Sidebar';
import PostFeed from '@/components/PostFeed';
import Widgets from '@/components/Widgets';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="text-[#0f1419] max-w-[1400px] min-h-screen border-2 border-black mx-auto flex">
      {/* <Sidebar /> */}
      {/* <PostFeed /> */}
      <Widgets />
    </div>
  );
}