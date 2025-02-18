import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services = () => {

   const { t } = useTranslation();
   const services = t('services', { returnObjects: true });

   return (
      <motion.section
         initial={{ opacity: 0, y: 100 }}  // Initial position off-screen (down)
         whileInView={{ opacity: 1, y: 0 }}  // Animate to normal position
         transition={{ duration: 0.5, ease: "easeOut" }}  // Smooth transition
         viewport={{ once: true, amount: 0.5 }}  // Trigger animation when 50% of the section is in view
      >

         <div className="container mx-auto">
            <div className="flex flex-col justify-center">
               <h2 className="mx-auto lg:mx-0 mb-6 text-lg text-accent"
                  aria-label="Section des services">Services</h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16">
                  {services.map((service, index) => {
                     return (
                        <div key={index}
                           className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                           {/* top */}
                           <div className="w-full flex justify-between items-center">
                              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                 {service.number}
                              </div>
                              <a href={service.link}
                                 target="_blank"
                                 className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                 aria-label={`En savoir plus sur le service ${service.title}`}
                                 rel="noopener noreferrer">
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
               </div>

            </div>
         </div>
      </motion.section>
   );
};

export default Services;;