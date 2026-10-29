import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getWhatsAppUrl } from "@/lib/site";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export default async function ProjectDetailPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const project=projects.find(p=>p.slug===slug);
 if(!project)notFound();
 const index=projects.findIndex(p=>p.slug===slug);
 const next=projects[(index+1)%projects.length];
 return <main><Navbar/><section className="detail-hero"><Image src={project.image} alt={`${project.title} interior concept`} fill priority sizes="100vw" className="cover-image"/><div className="detail-shade"/><div className="container detail-hero-content"><Link href="/projects" className="back-link back-link-light"><ArrowLeft size={14}/> All projects</Link><span className="eyebrow">{project.category} · Concept</span><h1 className="display">{project.title}</h1><p>{project.short}</p></div><span className="detail-index">{project.number} / 06</span></section>
 <section className="section-pad"><div className="container detail-overview"><div><span className="eyebrow">The project</span><h2 className="display detail-heading">A study in<br/><i>considered living.</i></h2></div><div className="detail-copy"><p>{project.brief}</p><p>{project.direction}</p><div className="detail-facts"><div><span>Location</span><strong>{project.location}</strong></div><div><span>Project type</span><strong>{project.category}</strong></div><div><span>Status</span><strong>{project.year}</strong></div></div></div></div></section>
 <section className="detail-gallery"><div className="container"><div className="detail-gallery-grid">{project.gallery.map((src,i)=><figure key={src+i} className={i===0?"detail-gallery-large":""}><div className="image-wrap detail-gallery-image"><Image src={src} alt={`${project.title} concept gallery image ${i+1}`} fill sizes="(max-width: 760px) 100vw, 70vw" className="cover-image"/></div><figcaption>0{i+1} — {i===0?"Overall atmosphere":i===1?"Material and spatial details":"Finishing and styling concept"}</figcaption></figure>)}</div></div></section>
 <section className="section-pad"><div className="container detail-overview"><div><span className="eyebrow">Design direction</span><h2 className="display detail-heading">The details<br/><i>that shape it.</i></h2></div><div><p className="detail-paragraph">The concept is built around a small set of deliberate choices that work together rather than compete for attention.</p><ul className="detail-list">{project.details.map(d=><li key={d}>{d}</li>)}</ul><p className="concept-note">This is an illustrative design concept for portfolio presentation, not a record of a completed client project.</p></div></div></section>
 <section className="next-project"><div className="container next-project-inner"><div><span className="eyebrow">Continue exploring</span><h2 className="display">{next.title}</h2><p>{next.category}</p></div><Link href={`/projects/${next.slug}`} className="button-light">Next project <ArrowUpRight size={15}/></Link></div></section>
 <section className="detail-contact"><div className="container"><span className="eyebrow">Have a space in mind?</span><h2 className="display">Let&apos;s shape something<br/><i>meaningful.</i></h2><a className="button-dark" href={getWhatsAppUrl(`Hello FORMA Atelier, I'd like to discuss a project inspired by ${project.title}.`)} target="_blank" rel="noreferrer">Discuss your project <ArrowUpRight size={15}/></a></div></section><Footer/></main>
}
