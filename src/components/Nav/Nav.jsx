import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
   { name: "welcome", id: "welcome" },
   { name: "services", id: "services" },
   { name: "resume", id: "resume" },
   { name: "work", id: "work" },
];

const Nav = () => {
   const [activeSection, setActiveSection] = useState('');

   // Observer pour mettre à jour la section active
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
               }
            });
         },
         { threshold: 0.5 } // Section visible à 50%
      );

      // Observer chaque section
      links.forEach((link) => {
         const section = document.getElementById(link.id);
         if (section) observer.observe(section);
      });

      return () => observer.disconnect(); // Nettoyer à la fin
   }, []);

   const handleScroll = (id) => {
      const section = document.getElementById(id);
      const headerHeight = document.querySelector("header").offsetHeight; // Hauteur du menu sticky
      if (section) {
         window.scrollTo({
            top: section.offsetTop - headerHeight,
            behavior: "smooth",
         });
      }
   };

   return (
      <nav className="flex gap-8">
         {links.map((link) => (
            <motion.button
               key={link.id}
               onClick={() => handleScroll(link.id)}
               className={`capitalize font-medium hover:text-accent transition-all 
               ${activeSection === link.id ? "text-accent border-b-2 border-accent" : ""}`}
               whileTap={{ scale: 0.9 }}
            >
               {link.name}
            </motion.button>
         ))}
      </nav>
   );
};

export default Nav;
