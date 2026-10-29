"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site";
export default function Projects(){return <section id="work" className="section-pad portfolio-section"><div className="container"><motion.div className="section-heading portfolio-heading" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}}><div><span className="eyebrow">Our portfolio</span><h2 className="display heading-large">Spaces with<br/><i>their own story.</i></h2></div><p>Residential and commercial interiors shaped by light, materiality, proportion and the individuality of each space.</p></motion.div>
 <div className="project-grid">{projects.slice(0,3).map((p,i)=><motion.article key={p.slug} className={`project-card ${i===1?"project-offset":""}`} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay:i*.1}}><Link href={`/projects/${p.slug}`} className="project-link"><div className="project-image image-wrap"><Image src={p.image} alt={`${p.title} interior design concept`} fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image"/><span className="project-view">View project <ArrowUpRight size={16}/></span></div><div className="project-meta"><div><h3 className="display project-title">{p.title}</h3><p className="project-category">{p.category} · Concept</p><p className="project-short">{p.short}</p></div><span className="project-number">{p.number}</span></div></Link></motion.article>)}</div>
 <div className="portfolio-bottom"><p>Explore a collection of considered spaces, material studies and design concepts.</p><Link href="/projects" className="button-dark">View all portfolio <ArrowUpRight size={15}/></Link></div>
 <p className="concept-note">All projects are fictional portfolio concepts created for demonstration purposes, not commissioned client work.</p>
 </div></section>}
