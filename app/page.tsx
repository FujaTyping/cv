import Headder from "./section/headder";
import Education from "./section/education";
import Skills from "./section/skills";
import Project from "./section/project";

export default function Home() {
  return (
    <>
      <main className="max-w-5xl mx-auto my-12 flex flex-col gap-8">
        <Headder />
        <Skills />
        <Project />
        <Education />
      </main>
    </>
  );
}
