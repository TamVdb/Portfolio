import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import { useTranslation } from 'react-i18next';


const Work = () => {

   const { t, i18n } = useTranslation();
   const projects = t('projects.projects', { returnObjects: true });

   const [currentIndex, setCurrentIndex] = useState(0);
   const [currentProject, setCurrentProject] = useState(projects[0]);

   // Met à jour le projet en fonction de l'index et de la langue
   useEffect(() => {
      setCurrentProject(projects[currentIndex]); // Met à jour les informations du projet
   }, [i18n.language, currentIndex, projects]); // Dépendance à la langue, index et projets

   const handleSlideChange = (swiper) => {
      const index = swiper.activeIndex;
      setCurrentIndex(index); // Met à jour l'index actuel du Swiper
   };

   return (
      <motion.section
         initial={{ opacity: 0, y: 100 }}  // Initial position off-screen (down)
         whileInView={{ opacity: 1, y: 0 }}  // Animate to normal position
         transition={{ duration: 0.5, ease: "easeOut" }}  // Smooth transition
         viewport={{ once: true, amount: 0.5 }}  // Trigger animation when 50% of the section is in view
      >

         <div className="container mx-auto">
            <div className="flex flex-col justify-center">
               <h2 className="mx-auto lg:mx-0 mb-6 text-lg text-accent">{t('projects.section')}</h2>

               <div className="flex flex-col justify-center">
                  <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                     <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">

                           {/* Num */}
                           <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                              {currentProject.num}
                           </div>

                           <div className="flex items-baseline justify-between flex-wrap">
                              {/* Project name */}
                              <h3 className="group-hover:text-accent transition-all duration-500">{currentProject.title}</h3>
                              {/* Project category */}
                              <p className="text-xl text-white">
                                 Projet {currentProject.category}
                              </p>
                           </div>

                           {/* Project description */}
                           <p className="text-white/90">{currentProject.description}</p>

                           {/* Project credentials if any */}
                           {currentProject.login && <p className="text-primary font-normal w-fit bg-[#ecfdf4] py-1 px-4 rounded">{currentProject.login}</p>}

                           {/* Stack */}
                           <ul className="flex gap-3 flex-wrap">
                              {currentProject.stack.map((item, index) => {
                                 return (
                                    <li key={index} className="text-lg xl:text-xl text-accent">
                                       {item}
                                       {/* Remove the last comma */}
                                       {index !== currentProject.stack.length - 1 && ","}
                                    </li>
                                 );
                              })}
                           </ul>

                           {/* Border */}
                           <div className="border border-white/20"></div>

                           {/* Buttons */}
                           <div className="flex items-center gap-4">
                              {/* Live project button */}
                              <a href={currentProject.live}
                                 target='_blank'
                                 className="linkProjectLive"
                                 rel="noopener noreferrer"
                                 aria-label={`Voir le projet ${currentProject.title} live`}>
                                 <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                       <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group">
                                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                       </TooltipTrigger>
                                       <TooltipContent>
                                          <p>Live {currentProject.title}</p>
                                       </TooltipContent>
                                    </Tooltip>
                                 </TooltipProvider>
                              </a>

                              {/* Github project button */}
                              <a href={currentProject.github}
                                 target='_blank'
                                 className="linkProjectGithub"
                                 rel="noopener noreferrer"
                                 aria-label={`Voir le code du projet ${currentProject.title} sur Github`}>
                                 <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                       <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group">
                                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                       </TooltipTrigger>
                                       <TooltipContent>
                                          <p>Repo Github {currentProject.title}</p>
                                       </TooltipContent>
                                    </Tooltip>
                                 </TooltipProvider>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="w-full xl:w-[50%]">
                        <Swiper
                           spaceBetween={30}
                           slidesPerView={1}
                           className="xl:h-[520px] mb-12"
                           onSlideChange={handleSlideChange}
                        >
                           {projects.map((project, index) => {
                              return (
                                 <SwiperSlide key={index} className="w-full">
                                    <div className="xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                       {/* overlay */}
                                       <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                       {/* image */}
                                       <div className="relative w-full h-full">
                                          <img src={project.image} alt="" className="object-cover" />
                                       </div>
                                    </div>
                                 </SwiperSlide>
                              );
                           })}
                           {/* slider buttons */}
                           <WorkSliderBtns
                              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                           />
                        </Swiper>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Work;
