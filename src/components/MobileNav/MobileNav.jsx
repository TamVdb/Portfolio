import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";

const links = [
   {
      name: "home",
      path: "/",
   },
   {
      name: "services",
      path: "/services",
   },
   {
      name: "resume",
      path: "/resume",
   },
   {
      name: "work",
      path: "/work",
   },
   {
      name: "contact",
      path: "/contact",
   },
];

const MobileNav = () => {
   const location = useLocation(); // Utilisation de useLocation pour obtenir le chemin actuel

   return (
      <Sheet>
         <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
         </SheetTrigger>
         <SheetContent className="flex flex-col">
            {/* Logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
               <Link to="/"> {/* Remplacement de href par to */}
                  <h1 className="text-4xl font-semibold">
                     Luke<span className="text-accent">.</span>
                  </h1>
               </Link>
            </div>
            {/* Navigation */}
            <nav className="flex flex-col justify-center items-center gap-8">
               {links.map((link, index) => {
                  return (
                     <Link
                        to={link.path} // Remplacement de href par to
                        key={index}
                        className={`${link.path === location.pathname &&
                           "text-accent border-b-2 border-accent"
                           } text-xl capitalize hover:text-accent transition-all`}
                     >
                        {link.name}
                     </Link>
                  );
               })}
            </nav>
         </SheetContent>
      </Sheet>
   );
};

export default MobileNav;