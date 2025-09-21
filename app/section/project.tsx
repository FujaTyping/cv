import { ArrowUpRight, SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Image
import Futami from "@/assets/project/Futami.webp";
import FloodGuard from "@/assets/project/FloodGuard.webp";
import ThaiGuide from "@/assets/project/ThaiGuide.webp";
import SMT from "@/assets/project/SMT.webp";
import YWMarket from "@/assets/project/YWMarket.webp";
import Envision from "@/assets/project/Envision.webp";

interface ProjectItem {
    name: string;
    decs: string;
    link: string;
    image: string;
}

const myProj: ProjectItem[] = [
    {
        name: "FloodGuard",
        decs: "FloodGuard แพลตฟอร์ม IoT สำหรับเฝ้าระวังและแจ้งเตือนน้ำท่วมแบบเรียลไทม์"
        , link: "https://floodguard.siraphop.me", image: FloodGuard.src
    },
    {
        name: "ThaiGuide",
        decs: "เว็บแอปพลิเคชันท่องเที่ยวเชิงเกม (Gamification) ที่ผสานภารกิจสะสมแต้มและรางวัลกับการเดินทาง เพื่อสร้างประสบการณ์สนุก น่าจดจำ และกระจายการท่องเที่ยวสู่แหล่งใหม่"
        , link: "https://thaiguide.siraphop.me", image: ThaiGuide.src
    },
    {
        name: "Yorwor67Slash5",
        decs: "แพลตฟอร์มจัดการห้องเรียนสำหรับ ม.5/5 SMT โรงเรียนหาดใหญ่วิทยาลัย ช่วยให้นักเรียนสามารถเช็กข้อมูลสำคัญต่างๆ ของห้องได้อย่างสะดวก รวดเร็ว และทันสมัย"
        , link: "https://smt.siraphop.me", image: SMT.src
    },
    {
        name: "Yorwor Market",
        decs: "แพลตฟอร์มซื้อขายออนไลน์ของชาว ฟ้า-แดง"
        , link: "https://market.siraphop.me", image: YWMarket.src
    },
    {
        name: "Smart Envision",
        decs: "Smart home from ESP32 , packed with advance application"
        , link: "https://github.com/FujaTyping/HfA-Project", image: Envision.src
    },
    {
        name: "Futami",
        decs: "ฟูตามิเป็นบอทเพลงที่สร้างขึ้นโดย FujaTyping เพื่อตอบสนองคำขอของ ph007phop เพื่อนสนิทของเขา ฟูตามิสามารถเปิดเพลงจากแหล่งต่างๆ ได้มากมายและได้รับความนิยมอย่างรวดเร็วในหมู่ผู้ใช้ Discord"
        , link: "https://github.com/FujaTyping/Futami", image: Futami.src
    }
]

function Project() {
    return (
        <>
            <section className="bg-neutral-800 p-8 mx-4 rounded-xl flex flex-col gap-8">
                <h1 className="font-bold text-3xl flex items-center gap-3">
                    Project
                    <Link href={"https://github.com/FujaTyping/"}><ArrowUpRight /></Link>
                </h1>
                {
                    myProj.map((item, index) => <div key={index} className='flex items-start gap-4 w-full'>
                        <img width={80} height={80} src={item.image} alt="Icon" className='rounded-xl' />
                        <div className='w-full'>
                            <div className='flex place-content-between w-full'>
                                <h1 className='font-bold text-xl'>{item.name}</h1>
                                <Link href={item.link}><SquareArrowOutUpRight /></Link>
                            </div>
                            <h2>{item.decs}</h2>
                        </div>
                    </div>)
                }
            </section>
        </>
    )
}

export default Project