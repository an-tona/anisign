'use client'
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/shared/shadcn-ui/avatar";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

const CommentCard = ({avatar, username, time, commentText, animeTitle}) => {

    return (
        <div
            className="flex flex-col rounded-[14px] bg-[rgba(255,255,255,0.02)] p-[25px] justify-between w-full gap-[20px]">
            <div className="flex gap-4 items-center">
                <img src="https://i.pinimg.com/736x/65/f2/4a/65f24ade9f7a5dd274d1325ba7e7944e.jpg" className="w-[50px] h-[50px] rounded-[14px]" alt="" />
                <div className="flex flex-col gap-[5px]">
                    <Link
                        href=""
                        className="text-[14px] font-semibold hover:opacity-50 transition-opacity duration-300"
                    >
                        {username}
                    </Link>
                    <div className="flex gap-2 items-center">
                    
                        <p className="text-[12px] opacity-60 font-medium">23.11.2022</p>
                        <div className="w-[5px] h-[5px] rounded-full bg-white/10"></div>
                        <p className="text-[12px] opacity-60 font-medium">{time}</p>
                    </div>
                </div>
            </div>
            <ScrollShadow hideScrollBar className="max-w-[480px] h-[70px]">
                        <p className="opacity-80">
                            Середина норм, концовкааааааа.... Нууууу...концовкааааааа
                            Середина норм, концовкааааааа.... Нууууу...
                            Середина норм, концовкааааааа.... Нууууу...концовкааааааа
                        </p>
            </ScrollShadow>
            <div className="w-full h-[1px] bg-white/5"></div>
            <button
                className="flex items-center py-2 gap-2 hover:opacity-50 transition-opacity duration-300"
                aria-label={`View more about ${animeTitle}`}>
                <img src="https://animebuff.ru/a_img/posters/original/anime_alya-inogda-koketnichaet-so-mnoi-po-russki.jpg?1711409936" className="w-[30px] h-[30px] rounded-full opacity-60" alt="" />
                <p className="text-[#A5A5A5]">{animeTitle}</p>
            </button>
        </div>
    );
};

export default CommentCard;
