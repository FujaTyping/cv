import React from 'react'
import YW from "@/assets/education/YW.webp";
//import PW from "@/assets/education/PW.png";
import Link from 'next/link';
import { Globe } from 'lucide-react';

function Education() {
    return (
        <>
            <section className="bg-neutral-800 p-8 mx-4 rounded-xl flex flex-col gap-8">
                <h1 className="font-bold text-3xl">Education</h1>
                <div className='grid grid-cols-1 gap-8'>
                    <div className='flex items-start gap-4 w-full'>
                        <img width={80} height={80} src={YW.src} alt="Logo" className='rounded-xl' />
                        <div className='w-full'>
                            <div className='flex place-content-between w-full'>
                                <h1 className='font-bold text-xl'>Science Math Technology</h1>
                                <Link href={"https://www.hatyaiwit.ac.th/intro/"}><Globe /></Link>
                            </div>
                            <h2 className='font-semibold'>Hatyaiwittayalai School</h2>
                            <p>April 2024 - Present</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4 w-full'>
                        <img width={80} height={80} src={YW.src} alt="Logo" className='rounded-xl' />
                        <div className='w-full'>
                            <div className='flex place-content-between w-full'>
                                <h1 className='font-bold text-xl'>Talent</h1>
                                <Link href={"https://www.hatyaiwit.ac.th/intro/"}><Globe /></Link>
                            </div>
                            <h2 className='font-semibold'>Hatyaiwittayalai School</h2>
                            <p>May 2021 - Febuary 2024</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education