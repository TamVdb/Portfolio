import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";

const links = [
   { name: "welcome", id: "welcome" },
   { name: "services", id: "services" },
   { name: "resume", id: "resume" },
   { name: "work", id: "work" },
   { name: "contact", id: "contact" },
];

const MobileNav = () => {
   const handleScroll = (id, closeMenu) => {
      const section = document.getElementById(id);
      if (section) {
         section.scrollIntoView({ behavior: "smooth" });
      }

      closeMenu();
   };

   return (
      <Sheet>
         {/* Bouton d'ouverture du menu */}
         <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
         </SheetTrigger>

         {/* Contenu du menu */}
         <SheetContent className="flex flex-col">
            {/* Logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
               <motion.button
                  onClick={() => handleScroll("welcome")}
                  whileTap={{ scale: 0.9 }}
               >
                  <h1 className="text-4xl font-semibold">
                     Tamara<span className="text-accent">.</span>
                  </h1>
               </motion.button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col justify-center items-center gap-8">
               {links.map((link) => (
                  <motion.button
                     key={link.id}
                     onClick={() => handleScroll(link.id, closeMenu)}
                     className="text-xl capitalize hover:text-accent transition-all"
                     whileTap={{ scale: 0.9 }}
                  >
                     {link.name}
                  </motion.button>
               ))}
            </nav>
         </SheetContent>
      </Sheet>
   );
};

export default MobileNav;