import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const links = [
   { name: "welcome", id: "welcome" },
   { name: "services", id: "services" },
   { name: "about", id: "resume" },
   { name: "projects", id: "work" },
];

const Nav = () => {

   const [activeSection, setActiveSection] = useState('');
   const { t } = useTranslation();

   // Use the IntersectionObserver API to check if a section is in the viewport
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
               }
            });
         },
         { threshold: 0.5 } // Visible at 50%
      );

      // Observe each section
      links.forEach((link) => {
         const section = document.getElementById(link.id);
         if (section) observer.observe(section);
      });

      return () => observer.disconnect(); // Cleanup
   }, []);

   const handleScroll = (id) => {
      const section = document.getElementById(id);
      const headerHeight = document.querySelector("header").offsetHeight; // Height of the header
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
               aria-label={`Naviguer vers ${link.name}`}
            >
               {t(`nav.${link.name}`)}
            </motion.button>
         ))}
      </nav>
   );
};

export default Nav;
