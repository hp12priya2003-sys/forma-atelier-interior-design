"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
export default function Navbar(){
 const[open,setOpen]=useState(false);
 const links=[["Work","#work"],["Philosophy","#philosophy"],["Services","#services"],["Contact","#contact"]];
 return <header className="site-nav"><a href="#top" className="brand" aria-label="FORMA Atelier home"><span className="brand-name">FORMA.</span><span className="brand-sub">ATELIER · INTERIORS</span></a>
 <nav className="desktop-nav">{links.map(([label,href])=><a key={label} href={href}>{label}</a>)}<a className="nav-cta" href="#contact">Begin a project <ArrowUpRight size={15}/></a></nav>
 <button className="mobile-toggle" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 <AnimatePresence>{open&&<motion.nav className="mobile-menu" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>{links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={15}/></a>)}<a href="#contact" onClick={()=>setOpen(false)}>Begin a project <ArrowUpRight size={15}/></a></motion.nav>}</AnimatePresence>
 </header>
}
