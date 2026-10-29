import Link from "next/link";
export default function NotFound(){return <main className="not-found"><span className="eyebrow">FORMA Atelier</span><h1 className="display">This space<br/><i>isn&apos;t here.</i></h1><p>The project you&apos;re looking for could not be found.</p><Link href="/projects" className="button-dark">Explore all projects</Link></main>}
