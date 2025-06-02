import React from 'react'
import StackIcon from 'tech-stack-icons'

interface SkillItem {
    iconName: string;
    displayName: string;
    gapClass: string;
}

const knownSkills: SkillItem[] = [
    { iconName: "reactjs", displayName: "React", gapClass: "gap-3" },
    { iconName: "python", displayName: "Python", gapClass: "gap-3" },
    { iconName: "firebase", displayName: "Firebase", gapClass: "gap-2" },
    { iconName: "tailwindcss", displayName: "Tailwind CSS", gapClass: "gap-2" },
    { iconName: "js", displayName: "Javascript", gapClass: "gap-4" },
    { iconName: "nextjs2", displayName: "NextJS", gapClass: "gap-2" },
    { iconName: "typescript", displayName: "Typescript", gapClass: "gap-3" },
    { iconName: "linux", displayName: "Linux", gapClass: "gap-2" },
    { iconName: "ps", displayName: "Photoshop", gapClass: "gap-2" },
    { iconName: "c++", displayName: "C++", gapClass: "gap-2" },
];

const learningSkills: SkillItem[] = [
    { iconName: "rust", displayName: "Rust", gapClass: "gap-2" },
    { iconName: "sveltejs", displayName: "Svelte", gapClass: "gap-2" },
    { iconName: "supabase", displayName: "Supabase", gapClass: "gap-3" },
    { iconName: "go", displayName: "Go", gapClass: "gap-3" },
];

const SkillListItem: React.FC<{ skill: SkillItem }> = ({ skill }) => (
    <div className={`flex items-center ${skill.gapClass}`}>
        <StackIcon className='w-6' name={skill.iconName} /> {skill.displayName}
    </div>
);

function Skills() {
    return (
        <>
            <section className="bg-neutral-800 p-8 mx-4 rounded-xl flex flex-col gap-8">
                <h1 className="font-bold text-3xl">Skills</h1>
                <div>
                    <h2 className='font-semibold text-xl mb-1'>I already know</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3'>
                        {knownSkills.map((skill) => (
                            <SkillListItem key={skill.iconName} skill={skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-xl mb-1'>I want to learn</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3'>
                        {learningSkills.map((skill) => (
                            <SkillListItem key={skill.iconName} skill={skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-xl mb-1'>I speak</h2>
                    <div className='flex items-center gap-6 mt-3 text-sm'>
                        <div className="flex items-center gap-2 bg-neutral-700 rounded-md px-4 p-1">
                            <span>🇹🇭</span>
                            <p>Thai - Native</p>
                        </div>
                        <div className="flex items-center gap-2 bg-neutral-700 rounded-md px-4 p-1">
                            <span>🇺🇸</span>
                            <p>English - A1</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills