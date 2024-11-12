import { Avatar, AvatarFallback, AvatarImage } from "@/shared/shadcn-ui/avatar";
import { Image } from "@nextui-org/image";

const AnimeCard = ({ backgroundImage, title, username, avatar }) => {
    return (
        <button className="relative flex-shrink-0 rounded-lg overflow-hidden group hover:opacity-40 transition-all duration-300">
            <img src={backgroundImage} className="object-cover w-full h-[310px] rounded-[14px]" />

            <div className="absolute rounded-[14px] inset-0 bg-black/70"></div>

            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <p className="text-white font-semibold mb-2 max-w-[75%] text-[14px] text-start">{title}</p>
                <div className="flex items-center gap-2 sm:gap-3  opacity-60">
                    <Avatar className="w-[30px] sm:w-[35px] h-[30px] sm:h-[35px]">
                        <AvatarImage src={avatar} alt={username} />
                        <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <p className="text-white text-xs sm:text-sm">{username}</p>
                </div>
            </div>
        </button>
    );
};

export default AnimeCard;
