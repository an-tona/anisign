'use client';

import Top from '@/widgets/Profile/Top';
import Statistics from '@/widgets/Profile/Statistics';
import Anime from '@/widgets/Profile/Anime';
import Frineds from './Friends';
import History from './History';

const Profile = () => {
  return (
    <div className="gap-[42px] mb-[166px]">
      <Top />
      <div className="container mx-auto max-[1000px]:flex flex-col min-[1000px]:grid grid-cols-[1fr_1px_373px] gap-[43px]">
        <div className="flex flex-col gap-[46px]">
          <Statistics />
          <Anime />
        </div>

        <div className="w-[1px] h-full bg-white/5 min-[1000px]:block none" />

        <div className="flex flex-col gap-[46px] min-[1000px]:opacity-50 transition-opacity duration-300 hover:opacity-100">
          <Frineds />
          <History />
        </div>
      </div>
    </div>
  );
};

export default Profile;
