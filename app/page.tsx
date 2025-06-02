import Headder from "./section/headder";
import Education from "./section/education";

export default function Home() {
  return (
    <>
      <main className="max-w-5xl mx-auto my-12 flex flex-col gap-8">
        <Headder />
        <Education />
      </main>
    </>
  );
}
