import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
   {
      num: "01",
      category: "fullstack",
      title: "PlanMyTrip",
      description: "Application de planification de voyages développée en React. Elle permet de créer des activités par voyage et de les organiser par jour grâce au drag and drop.",
      login: "User: User / Password: admin",
      stack: [{ name: "React" }, { name: "Redux" }, { name: "Tailwind.css" }, { name: "Node.js" }, { name: "MongoDB" }],
      image: "/assets/work/plan-my-trip.jpg",
      live: "https://plan-my-trip-seven.vercel.app/",
      github: "https://github.com/TamVdb/itf3_Project_PlanMyTrip",
   },
   {
      num: "02",
      category: "frontend",
      title: "Shake'n Taste",
      description: "Utilisation d'une API pour afficher des coktails. Mode sombre/clair en JavaScript qui correspond aux préférences utilisateur. Une page 'Lab' pour tester l'idée de créer son propre cocktail. Création du logo avec Illustrator et Photoshop.",
      stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
      image: "/assets/work/shake-n-taste.jpg",
      live: "https://shake-n-taste.vercel.app/index.html",
      github: "https://github.com/TamVdb/itf3_Project_Shake_and_Taste",
   },
   {
      num: "03",
      category: "frontend",
      title: "Mastermind",
      description: "Développement en JavaScript du célèbre jeu Mastermind.",
      stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
      image: "/assets/work/mastermind.jpg",
      live: "https://mastermind-snowy.vercel.app/",
      github: "https://github.com/TamVdb/itf3_JS_mastermind",
   },
   {
      num: "04",
      category: "frontend",
      title: "GreenFood",
      description: "Première étape d'un projet de commande de box repas, présentant une page de plats et recettes construite avec HTML, CSS et JavaScript.",
      stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
      image: "/assets/work/green-food.jpg",
      live: "https://green-food-gamma.vercel.app/",
      github: "https://github.com/TamVdb/itf3_Project_GreenFood",
   },
];

const Work = () => {
   const [project, setProject] = useState(projects[0]);

   const handleSlideChange = (swiper) => {
      // Get current slide index
      const currentIndex = swiper.activeIndex;
      // Update project state based on current slide index
      setProject(projects[currentIndex]);
   };

   return (
      <div className="container mx-auto">
         <div className="flex flex-col justify-center py-8 xl:py-14">
            <h2 className="mx-auto lg:mx-0 mb-10 text-base bg-white/80 text-[#23262e] w-fit rounded py-1 px-3">Projets</h2>
            <motion.section
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
               }}
               className="flex flex-col justify-center"
            >
               <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                  <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                     <div className="flex flex-col gap-[30px] h-[50%]">

                        {/* Num */}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                           {project.num}
                        </div>

                        <div className="flex items-baseline justify-between">
                           {/* Project name */}
                           <h3 className="group-hover:text-accent transition-all duration-500">{project.title}</h3>
                           {/* Project category */}
                           <p className="text-xl text-white">
                              Projet {project.category}
                           </p>
                        </div>

                        {/* Project description */}
                        <p className="text-white/90">{project.description}</p>

                        {/* Stack */}
                        <ul className="flex gap-4">
                           {project.stack.map((item, index) => {
                              return (
                                 <li key={index} className="text-xl text-accent">
                                    {item.name}
                                    {/* remove the last comma */}
                                    {index !== project.stack.length - 1 && ","}
                                 </li>
                              );
                           })}
                        </ul>

                        {/* Border */}
                        <div className="border border-white/20"></div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                           {/* Live project button */}
                           <a href={project.live} target='_blank'>
                              <TooltipProvider delayDuration={100}>
                                 <Tooltip>
                                    <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group">
                                       <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                       <p>Projet live</p>
                                    </TooltipContent>
                                 </Tooltip>
                              </TooltipProvider>
                           </a>

                           {/* Github project button */}
                           <a href={project.github} target='_blank'>
                              <TooltipProvider delayDuration={100}>
                                 <Tooltip>
                                    <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group">
                                       <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                       <p>Repo Github</p>
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
                                 <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
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
            </motion.section>
         </div>
      </div>
   );
};

export default Work;
