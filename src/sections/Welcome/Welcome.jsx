import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social/Social";
import Photo from "@/components/Photo/Photo";

const Welcome = () => {
   return (
      <>
         <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row items-center justify-between py-8 xl:py-16">

               {/* text */}
               <div className="text-center xl:text-left order-2 xl:order-none">
                  <span className="text-xl">Front-End Developer</span>
                  <p className="text-6xl">Je suis</p>
                  <h1 className="h1 text-accent mb-6">
                     Tamara <span className="text-5xl">Vandebroeck</span>
                  </h1>
                  <p className="max-w-[550px] mb-9 text-white/90">
                     J'aime coder des trucs pour le web ! Mon objectif est de
                     créer des applications web attrayantes, inspirantes et optimisées au pixel près.
                  </p>

                  {/* btn and socials */}
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                     <Button
                        variant="outline"
                        size="lg"
                        className="uppercase flex items-center gap-2">
                        <span>Mon CV</span>
                        <FiDownload className="text-xl" />
                     </Button>
                     <div className="mb-8 xl:mb-0">
                        <Social />
                     </div>
                  </div>
               </div>

               {/* photo */}
               <div className="order-1 xl:order-none mb-8 xl:mb-0">
                  <Photo />
               </div>
            </div>
         </div>
      </>
   );
};

export default Welcome;