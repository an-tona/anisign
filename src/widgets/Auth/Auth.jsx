'use client';
import {useState} from 'react';
import {Label} from "@/shared/shadcn-ui/label";
import {ASwitch} from "@/shared/anisign-ui/Switch";
import {AButton} from "@/shared/anisign-ui/Button";
import {AInput} from "@/shared/anisign-ui/Input";
import Link from 'next/link'; // Исправленный импорт
import Lefticon from './icon/left';

export function Auth() {
    return (
        <div className="bg-[url('/bg/auth_bg.png')] bg-cover bg-center">
            <div className="flex items-center justify-end w-full h-screen">
                <div className="bg-[#060606] mr-[175px] p-[50px] rounded-[24px] w-[490px]">
                    <div className="flex justify-between items-center">
                        <p className='font-semibold'>Добро пожаловать ✌️</p>
                        <Link href="/" className="bg-red px-[15px] h-[33px] border rounded-full flex items-center"><Lefticon/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
