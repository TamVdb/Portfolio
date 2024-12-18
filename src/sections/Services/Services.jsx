import { BsArrowDownRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
   {
      num: "01",
      title: "Web Development",
      description: "Développement d'applications web et de sites sur mesure.",
      href: "https://www.zestcitron.be/#services",
   },
   {
      num: "02",
      title: "UI/UX Design",
      description: "Analyse des besoins et conception centrée sur l’utilisateur final.",
      href: "https://www.zestcitron.be/#services",
   },
   {
      num: "03",
      title: "Web Design",
      description: "Conception de sites optimisés performance et accessibilité.",
      href: "https://www.zestcitron.be/#services",
   },
   {
      num: "04",
      title: "SEO",
      description: "Chaque site est optimisé au référencement naturel.",
      href: "https://www.zestcitron.be/#services",
   },
];

const Services = () => {
   return (
      <div className="container mx-auto">
         <div className="flex flex-col justify-center py-8 xl:py-16">
            <h2 className="mx-auto lg:mx-0 mb-10 text-lg bg-white/80 text-primary w-fit rounded py-1 px-3">Services</h2>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
               }}
               className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16"
            >
               {services.map((service, index) => {
                  return (
                     <div key={index}
                        className="flex-1 flex flex-col justify-center gap-6 group"
                     >
                        {/* top */}
                        <div className="w-full flex justify-between items-center">
                           <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                              {service.num}
                           </div>
                           <a href={service.href} target="_blank" className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                              <BsArrowDownRight className="text-primary text-3xl" />
                           </a>
                        </div>

                        {/* title */}
                        <h3 className=" group-hover:text-accent transition-all duration-500">
                           {service.title}
                        </h3>

                        {/* description */}
                        <p className="text-white/80">{service.description}</p>

                        {/* border */}
                        <div className="border-b border-white/20 w-full"></div>
                     </div>
                  );
               })}
            </motion.div>
         </div>
      </div>
   );
};

export default Services;;