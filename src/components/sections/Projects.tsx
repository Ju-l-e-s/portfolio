"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import { ProjectIllustration } from "../ui/ProjectIllustrations";

 export function Projects() {
   const scrollRef = useRef<HTMLDivElement>(null);
   const [showHint, setShowHint] = useState(true);

   useEffect(() => {
     const node = scrollRef.current;
     if (!node) return;
     const handleScroll = () => {
       if (node.scrollLeft > 40) {
         setShowHint(false);
       }
     };
     node.addEventListener("scroll", handleScroll, { passive: true });
     return () => node.removeEventListener("scroll", handleScroll);
   }, []);

   return (
     <section
       id="projects"
       className="relative flex h-[100dvh] w-full snap-start scroll-mt-24 flex-col items-center justify-center overflow-hidden bg-bg"
     >
       <div className="mb-4 w-full max-w-7xl px-6 text-center md:text-left">
         <h2 className="text-xs font-mono uppercase tracking-widest text-accent-a">Portfolio</h2>
         <h3 className="text-2xl font-bold text-text">Projets</h3>
       </div>

       <div
         ref={scrollRef}
         className="relative flex w-full max-w-7xl items-center gap-4 overflow-x-auto px-6 pb-10 snap-x snap-mandatory scrollbar-hide"
         aria-label="Liste horizontale de projets"
       >
         <div
           className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent"
           aria-hidden
         />

         {projects.map((project, index) => (
           <div
             key={index}
             className="relative flex h-[55vh] sm:h-[50vh] min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-[30vw] xl:min-w-[28vw] snap-center flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/50 shadow-xl"
          >
             {index === 0 && (
               <div
                 className={`pointer-events-none absolute right-3 top-3 z-20 flex items-center gap-2 rounded-full border border-accent-a/30 bg-accent-a/10 px-3 py-1.5 text-xs font-semibold text-text shadow-lg backdrop-blur-lg transition-all duration-500 ${
                   showHint ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                 }`}
               >
                 <span className="animate-pulse text-text">Swipe</span>
                 <ChevronRight className="h-4 w-4 text-accent-a animate-wiggle-x" />
               </div>
             )}

             <div className="relative h-1/3 w-full shrink-0 bg-gradient-to-br from-gray-800 to-black">
               <ProjectIllustration name={project.illustration} />
               {project.tags[0] && (
                 <div className="absolute left-3 top-3">
                   <span className="rounded border border-white/10 bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur">
                     {project.tags[0]}
                   </span>
                 </div>
               )}
             </div>

             <div className="flex flex-1 flex-col p-5">
               <h4 className="mb-2 line-clamp-1 text-lg font-bold text-text">{project.title}</h4>
               <p className="text-sm leading-relaxed text-muted line-clamp-4">{project.description}</p>
             </div>
           </div>
         ))}
       </div>

       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg via-bg/90 to-transparent" aria-hidden />
       <div className="absolute inset-x-0 bottom-6 flex justify-center px-6">
         <a
           href="https://github.com/Ju-l-e-s"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-text transition hover:border-accent-a/40 hover:bg-accent-a/10"
         >
           Voir tous mes projets <span className="text-base">↗</span>
         </a>
       </div>
     </section>
   );
 }
