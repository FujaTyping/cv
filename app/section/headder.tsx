import React from 'react';
import { Mail, Github, Twitter, MapPin } from 'lucide-react';
import Link from "next/link";

function Headder() {
    return (
        <>
            <section className="bg-neutral-800 p-8 mx-4 rounded-xl grid md:grid-cols-4 gap-8">
                <div className="flex items-start justify-center">
                    <img alt="Profile" width={200} height={200} className="rounded-xl" src={"https://avatars.githubusercontent.com/u/86290693?v=4"} />
                </div>
                <div className="md:col-span-3 flex flex-col gap-4">
                    <div>
                        <h1 className="font-bold text-4xl">Siraphop Sukchu</h1>
                        <h2 className="mt-2 font-semibold">Full Stack Developer</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-1">
                        <p className="flex items-center gap-2"><Mail /> Mail : <Link href={"mailto:contact@siraphop.me"}>contact@siraphop.me</Link></p>
                        <p className="flex items-center gap-2"><Github /> Github : <Link href={"https://github.com/FujaTyping"}>@FujaTyping</Link></p>
                        <p className="flex items-center gap-2"><Twitter /> X : <Link href={"https://x.com/FujaTyping"}>@FujaTyping</Link></p>
                        <p className="flex items-center gap-2"><MapPin /> From : Hatyai, Thailand</p>
                    </div>
                    <p>{"I'm a passionate tech enthusiast who loves creating real-world solutions through coding. I specialize in developing smart home systems, web applications, and AI-powered tools. My projects, such as SmartEnvision and Yorwor Market, focus on accessibility, innovation, and improving everyday life. I'm always eager to learn new technologies and take on challenges that make a positive impact."}</p>
                </div>
            </section>
        </>
    )
}

export default Headder