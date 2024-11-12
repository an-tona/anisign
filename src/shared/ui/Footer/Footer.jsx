import Link from 'next/link';

const Footer = () => {
  return (
      <footer className="bg-[rgba(255,255,255,0.01)]">
        <div className="container">
          <div className="flex justify-between items-center py-[60px] border-b-1">
              <p className="text-[24px] font-bold text-[#CCBAE4]">
                Anisign<span className='text-[#A8A8A8]'>— Аниме портал для фанатов,<br/>новостей и обсуждений!</span>
              </p>
              <Link href="/" className="border p-[14px] rounded-[14px] opacity-100 hover:opacity-70 transition-opacity duration-300">
                  Список аниме
              </Link>
          </div>
          <div className="flex justify-between py-[80px]">
            <div className="flex flex-col gap-7">
              <p className="font-semibold opacity-60">Навигация</p>
              <div className="flex flex-col gap-2">
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">Cписок аниме</Link>
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">Колекции</Link>
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">Персонажи</Link>
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">Календарь</Link>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <p className="font-semibold opacity-60">Остальное</p>
              <div className="flex flex-col gap-2">
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">Коментарии</Link>
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">Репорт</Link>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <p className="font-semibold opacity-60">Соц Сети</p>
              <div className="flex flex-col gap-2">
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">VK</Link>
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">Discord</Link>
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">Telegram</Link>
                <Link href="/" className="opacity-100 hover:opacity-70 transition-opacity duration-300">YouTube</Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row sm:gap-7 md:gap-7 py-10 border-t-1">
            <Link href='/'
                  className="flex gap-3 md:gap-5 items-center opacity-100 hover:opacity-70 transition-opacity duration-300 mb-3 md:mb-0">
              <img src="logo.png" alt="Anisign Logo" className="w-8 h-8 md:w-[30px] md:h-[30px]"/>
              <p className='text-white text-sm md:text-[14px]'>
                Anisign<span className="text-gray-400 text-xs md:text-[12px]">.com</span>
              </p>
            </Link>
            <div className="text-white flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <Link href='mailto:support@anisign.com'
                    className="text-[#CCBAE4] opacity-100 hover:opacity-70 transition-opacity duration-300 text-sm md:text-base">
                support@anisign.com
              </Link>
              <p className="text-[#787878] text-sm md:text-base">© 2024 Anisign</p>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
