"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/site";
export default function AllProjectsPage(){
 const[cate,setCate]=useState("All projects");
 const filters=["All projects","Residential","Kitchens & Living","Compact Homes","Commercial"];
 const visible=useMemo(()=>projects.filter(p=>cate==="All projects"||(cate==="Residential"&&["stillwood-residence","monolith-apartment","solace-residence"].includes(p.slug))||(cate==="Kitchens & Living"&&p.slug==="walnut-house")||(cate==="Compact Homes"&&p.slug==="urban-nest")||(cate==="Commercial"&&p.slug==="form-office")),[cate]);
 return <main><Navbar/><section className="subpage-hero"><div className="container"><Link href="/#work" className="back-link"><ArrowLeft size={14}/> Back to home</Link><span className="eyebrow">FORMA Atelier · Selected work</span><h1 className="display">Spaces with<br/><i>their own story.</i></h1><p>A collection of residential, material and workspace concepts exploring the relationship between people and the spaces they inhabit.</p></div></section><section className="section-pad"><div className="container"><div className="filter-row" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} type="button" className={cate===f?"filter-active":""} onClick={()=>setCate(f)}>{f}</button>)}</div><div className="all-project-grid">{visible.map((p,i)=><motion.article key={p.slug} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:i*.04}} className="project-card"><Link href={`/projects/${p.slug}`} className="project-link"><div className="project-image image-wrap"><Image src={p.image} alt={p.title} fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image"/><span className="project-view">Explore case study <ArrowUpRight size={16}/></span></div><div className="project-meta"><div><h2 className="display project-title">{p.title}</h2><p className="project-category">{p.category} · Concept</p><p className="project-short">{p.short}</p></div><span className="project-number">{p.number}</span></div></Link></motion.article>)}</div><p className="concept-note">All projects are fictional portfolio concepts created for demonstration purposes.</p></div></section><Footer/></main>
}
