"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookMarked, GitFork, LoaderCircle } from 'lucide-react';

interface Project {
    id: number;
    name: string;
    description: string;
    full_name: string;
    html_url: string;
    fork: boolean;
}

function Project() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/github')
            .then(response => response.json())
            .then((data: Project[]) => {
                const shuffledAndSelected = [...data].sort(() => 0.5 - Math.random()).slice(0, 6);
                setProjects(shuffledAndSelected);
                setLoading(false);
            })
            .catch(error => console.error("Failed to fetch projects:", error));
    }, []);

    return (
        <>
            <section className="bg-neutral-800 p-8 mx-4 rounded-xl flex flex-col gap-8">
                <h1 className="font-bold text-3xl flex items-center gap-3">
                    Project
                    <Link href={"https://github.com/FujaTyping/"}><ArrowUpRight /></Link>
                </h1>
                {loading ? <>
                    <div className='flex items-center justify-center gap-3'>
                        <LoaderCircle className='animate-spin' /> Loading data...
                    </div>
                </> : <>
                    {
                        projects.map((project) => (
                            <Link href={project.html_url} key={project.id}>
                                <div className='flex items-start gap-4'>
                                    {
                                        project.fork ? <GitFork className='size-7' /> : <BookMarked className='size-7' />
                                    }
                                    <div>
                                        <h1 className='font-semibold text-xl'>{project.name}</h1>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </>}
            </section>
        </>
    )
}

export default Project