import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaWordpress, FaSass, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiRedux, SiGoogleanalytics, SiGoogletagmanager, SiAdobephotoshop, SiPhp, SiAdobeillustrator } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


// About data
const about = {
   title: "À propos de moi",
   description: "+9 ans d'expérience dans la création de sites web, à la fois en entreprise et en tant que freelance. Passionnée par le design, je développe actuellement mes compétences en front-end avec une formation axée sur JavaScript et React.",
   info: [
      {
         fieldName: "Nom",
         fieldValue: "Tamara Vandebroeck",
      },
      {
         fieldName: "Téléphone",
         fieldValue: "(+32) 477 73 26 49",
      },
      {
         fieldName: "Expérience",
         fieldValue: "+9 ans",
      },
      {
         fieldName: "Langues",
         fieldValue: "Français, Anglais",
      },
   ],
};

// Experience data
const experience = {
   title: "Mes expériences",
   items: [
      {
         company: "ZestCitron",
         position: "Freelance Front-End Developer",
         duration: "2020 - Présent",
      },
      {
         company: "Inbetween Agency",
         position: "Web Developer",
         duration: "2015 - 2020",
      },
      {
         company: "ORDIA (Ile de la Réunion)",
         position: "Conseillère insertion professionnelle",
         duration: "2010 - 2013",
      },
      {
         company: "Bx1, KNTV, Nixia, Uchrony",
         position: "Stages: journaliste, production, réseau, web developer",
         duration: "",
      },
   ],
};

// Education data
const education = {
   title: "Mes formations",
   items: [
      {
         institution: "Interface3",
         degree: "Front-End Web Developer",
         duration: "2024 - 2025",
      },
      {
         institution: "Institut Paul Hankar",
         degree: "BES Web Developer",
         duration: "2013 - 2015",
      },
      {
         institution: "CNED",
         degree: "1 an BTS Réseau informatique",
         duration: "2012",
      },
      {
         institution: "I.S.F.S.C.",
         degree: "Baccalauréat en Communication",
         duration: "2004 - 2007",
      },
      {
         institution: "Tishomingo High School",
         degree: "Année scolaire aux USA",
         duration: "2001 - 2002",
      },
   ],
};

// Skills data
const skills = {
   title: "Mes compétences",
   skillList: [
      {
         icon: <FaHtml5 />,
         name: "HTML5",
      },
      {
         icon: <FaCss3 />,
         name: "CSS3",
      },
      {
         icon: <FaJs />,
         name: "Javascript",
      },
      {
         icon: <FaReact />,
         name: "React",
      },
      {
         icon: <FaNodeJs />,
         name: "Node.js",
      },
      {
         icon: <SiRedux />,
         name: "Redux",
      },
      {
         icon: <FaWordpress />,
         name: "Wordpress",
      },
      {
         icon: <SiPhp />,
         name: "PHP",
      },
      {
         icon: <FaGitAlt />,
         name: "Git",
      },
      {
         icon: <FaGithub />,
         name: "GitHub",
      },
      {
         icon: <FaSass />,
         name: "Sass",
      },
      {
         icon: <SiTailwindcss />,
         name: "Tailwind.css",
      },
      {
         icon: <SiBootstrap />,
         name: "Boostrap",
      },
      {
         icon: <FaFigma />,
         name: "Figma",
      },
      {
         icon: <SiAdobephotoshop />,
         name: "Photoshop",
      },
      {
         icon: <SiAdobeillustrator />,
         name: "Illustrator",
      },
      {
         icon: <SiGoogleanalytics />,
         name: "Google Analytics",
      },
      {
         icon: <SiGoogletagmanager />,
         name: "Google Tag Manager",
      },
   ],
};

const Resume = () => {

   return (
      <motion.section
         initial={{ opacity: 0, y: 100 }}  // Initial position off-screen (down)
         whileInView={{ opacity: 1, y: 0 }}  // Animate to normal position
         transition={{ duration: 0.5, ease: "easeOut" }}  // Smooth transition
         viewport={{ once: true, amount: 0.5 }}  // Trigger animation when 50% of the section is in view
      >

         <div className="container mx-auto">
            <div className="flex flex-col justify-center">
               <h2 className="mx-auto lg:mx-0 mb-6 text-lg text-accent">À propos</h2>

               <div className="flex flex-col items-center justify-center">

                  <Tabs defaultValue="skills" className="w-full flex flex-col xl:flex-row gap-16">
                     <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="skills" aria-label="Compétences" tabIndex="0" aria-selected="true">Compétences</TabsTrigger>
                        <TabsTrigger value="experience" aria-label="Expériences professionnelles" tabIndex="0">Expériences</TabsTrigger>
                        <TabsTrigger value="education" aria-label="Mes formations" tabIndex="0">Formation</TabsTrigger>
                        <TabsTrigger value="about" aria-label="À propos de moi" tabIndex="0">À propos de moi</TabsTrigger>
                     </TabsList>

                     {/* Content */}
                     <div className="w-full">

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full" aria-labelledby="skills" tabIndex={0} aria-hidden={false}>
                           <div className="flex flex-col gap-6">

                              {/* Title */}
                              <h3 className="text-4xl xl:text-5xl font-bold text-center xl:text-left">{skills.title}</h3>

                              <ul className="grid grid-cols-5 sm:grid-cols-6 gap-3 md:gap-6">
                                 {skills.skillList.map((skill, index) => {
                                    return (
                                       <li key={index}>
                                          <TooltipProvider delayDuration={100}>
                                             <Tooltip>
                                                <TooltipTrigger className="h-[55px] w-[55px] sm:h-[80px] sm:w-[80px] lg:h-[100px] lg:w-[100px] bg-[#23262e] rounded-xl flex justify-center items-center group" aria-label={skill.name}>
                                                   <div className="text-3xl sm:text-4xl lg:text-5xl group-hover:text-accent transition-all duration-300" aria-hidden="true">
                                                      {skill.icon}
                                                   </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                   <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                             </Tooltip>
                                          </TooltipProvider>
                                       </li>
                                    );
                                 })}
                              </ul>
                           </div>
                        </TabsContent>

                        {/* Experience */}
                        <TabsContent value="experience" className="w-full" aria-labelledby="experience" tabIndex={0} aria-hidden={false}>
                           <div className="flex flex-col gap-6">

                              {/* Title */}
                              <h3 className="text-center xl:text-left">{experience.title}</h3>

                              <ScrollArea className="h-[400px]">
                                 <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {experience.items.map((item, index) => {
                                       return (
                                          <li key={index}
                                             className="bg-[#23262e] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                          >
                                             <span className="text-accent">{item.duration}</span>
                                             <p className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.position}
                                             </p>

                                             {/* Dot & Company */}
                                             <div className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                                <p className="text-white/70">{item.company}</p>
                                             </div>
                                          </li>
                                       );
                                    })}
                                 </ul>
                              </ScrollArea>
                           </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full" aria-labelledby="education" tabIndex={0} aria-hidden={false}>
                           <div className="flex flex-col gap-6">

                              {/* Title */}
                              <h3 className="text-4xl xl:text-5xl font-bold text-center xl:text-left">{education.title}</h3>

                              <ScrollArea className="h-[400px]">
                                 <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {education.items.map((item, index) => {
                                       return (
                                          <li key={index}
                                             className="bg-[#23262e] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                          >
                                             <span className="text-accent">{item.duration}</span>
                                             <p className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.degree}
                                             </p>

                                             {/* Dot & School */}
                                             <div className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                                <p className="text-white/70">{item.institution}</p>
                                             </div>
                                          </li>
                                       );
                                    })}
                                 </ul>
                              </ScrollArea>
                           </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left" aria-labelledby="about" tabIndex={0} aria-hidden={false}>
                           <div className="flex flex-col gap-6">

                              {/* Title */}
                              <h3 className="text-4xl xl:text-5xl font-bold text-center xl:text-left">{about.title}</h3>
                              <p className=" text-white/90 mx-auto xl:mx-0">
                                 {about.description}
                              </p>
                              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                 {about.info.map((item, index) => {
                                    return (
                                       <li key={index}
                                          className="flex items-center justify-center xl:justify-start gap-4"
                                       >
                                          <span className="text-white/70">{item.fieldName}</span>
                                          <span className="text-lg font-extralight">{item.fieldValue}</span>
                                       </li>
                                    );
                                 })}
                              </ul>
                           </div>
                        </TabsContent>
                     </div>
                  </Tabs>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Resume;
