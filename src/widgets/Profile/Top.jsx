'use client'
import {Avatar} from "@nextui-org/avatar";
import {Badge} from "@/shared/shadcn-ui/badge";
import {AButton} from "@/shared/anisign-ui/Button";


const Top = () => {

    return (
        <div className="anim-list-background h-[368px] p-6 relative">
            <div className="container mx-auto h-full">
                <div
                    className="absolute bottom-0 left-0 mb-5 w-full max-w-[90%] lg:max-w-none lg:static lg:flex lg:justify-between lg:items-center gap-5"
                    style={{marginTop: '190px'}}>
                    <div className="flex flex-col lg:flex-row items-center mb-5 gap-5">
                        <Avatar
                            src="https://gamek.mediacdn.vn/133514250583805952/2024/5/13/photo-1715575082069-1715575082737592043637.png"
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg"
                            alt="User Avatar"
                        />
                        <div className="flex flex-col gap-2 text-center lg:text-left">
                            <p className="text-md sm:text-lg font-semibold text-white">@AdamS</p>
                            <div className="flex gap-2 justify-center lg:justify-start">
                                <Badge variant="outline" className="text-white">Новичок</Badge>
                                <Badge
                                    className="text-xs sm:text-sm text-black bg-gradient-to-r from-blue-400 to-pink-400"
                                >
                                    PRO
                                </Badge>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                        <AButton size='md' color='gray' className="py-[25px]">
                            Добавить в друзья
                        </AButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;