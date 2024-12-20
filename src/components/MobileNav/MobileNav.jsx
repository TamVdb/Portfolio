import { useState } from "react";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const links = [
   { name: "welcome", id: "welcome" },
   { name: "services", id: "services" },
   { name: "resume", id: "resume" },
   { name: "work", id: "work" },
   { name: "contact", id: "contact" },
];

const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false);

   // Fonction pour faire défiler vers une section spécifique
   const handleScroll = (id) => {
      const section = document.getElementById(id);
      if (section) {
         section.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <div>
         {/* Bouton d'ouverture du menu */}
         <button
            className="flex justify-center items-center p-2"
            onClick={() => setIsOpen(true)}>
            <CiMenuFries className="text-[32px] text-accent" />
         </button>

         {/* Fond semi-transparent (overlay) */}
         {isOpen && (
            <motion.div
               className={`fixed inset-0 z-40 bg-black/50`}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               onClick={() => setIsOpen(false)} // Ferme le menu si on clique à l'extérieur
            ></motion.div>
         )}

         {/* Menu mobile */}
         <motion.div
            className={`fixed z-50 gap-4 bg-primary p-6 shadow-lg top-0 right-0 w-3/4 h-full`}
            initial={{ x: "100%" }}
            animate={isOpen ? { x: 0 } : { x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
         >
            {/* Logo */}
            <div className="mt-32 mb-28 text-center text-2xl">
               <div className="inline-flex gap-4 items-center">
                  <img src="./assets/logo-tamara.png" alt="Logo Portfolio Tamara Vandebroeck" className="w-10 h-10 sm:w-14 sm:h-14" />
                  <h1>Tamara<span className="text-accent">.</span></h1>
               </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col justify-center items-center gap-8">
               {links.map((link) => (
                  <motion.button
                     key={link.id}
                     onClick={() => {
                        handleScroll(link.id);
                        setIsOpen(false); // Ferme le menu après avoir cliqué
                     }}
                     className="text-xl capitalize hover:text-accent transition-all"
                     whileTap={{ scale: 0.9 }}
                  >
                     {link.name}
                  </motion.button>
               ))}
            </nav>

            {/* Bouton de fermeture */}
            <motion.button
               onClick={() => setIsOpen(false)} // Ferme le menu
               className="absolute top-8 right-8 text-3xl text-accent"
               whileTap={{ scale: 0.9 }}
            >
               <IoMdClose className="text-[32px] text-accent" />
            </motion.button>
         </motion.div>
      </div>
   );
};

export default MobileNav;
