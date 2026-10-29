"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
export default function Hero(){
 const reduce=useReducedMotion();
 return <section className="hero" aria-label="FORMA Atelier introduction">
  <motion.div className="hero-image" initial={{scale:reduce?1:1.12,opacity:.45}} animate={{scale:1,opacity:1}} transition={{duration:1.7,ease:[.16,1,.3,1]}}>
   <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90" alt="Sunlit contemporary living space with warm natural materials" fill priority sizes="100vw" className="hero-photo"/>
  </motion.div>
  <div className="hero-overlay"/>
  <div className="hero-content">
   <motion.p className="eyebrow hero-eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.35,duration:.7}}>Interior design studio · Bengaluru</motion.p>
   <motion.h1 className="hero-title" initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.48,duration:1,ease:[.16,1,.3,1]}}>Spaces shaped<br/><em>around you.</em></motion.h1>
   <motion.div className="hero-bottom" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.85,duration:.7}}>
    <p>Thoughtfully designed interiors that bring together timeless materials, considered details and the way you live.</p>
    <div className="hero-actions"><a href="#work" className="button-light">Explore our work <ArrowUpRight size={15}/></a><a href="#contact" className="button-ghost">Begin a project <ArrowUpRight size={15}/></a></div>
   </motion.div>
  </div>
  <motion.a href="#studio" className="hero-scroll" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.25}}><span>Scroll to explore</span><ArrowDown size={14}/></motion.a>
  <span className="hero-index">01 / 06 — CONSIDERED LIVING</span>
 </section>
}
