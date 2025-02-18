import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

// Components
import Social from "@/components/Social/Social";
import Photo from "@/components/Photo/Photo";

const Welcome = () => {

   const { t } = useTranslation();

   return (

      <div className="container mx-auto">
         <div className="flex flex-col xl:flex-row items-center justify-between">

            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
               <span className="text-xl">Front-End Developer</span>
               <h2 className="main-title mb-6">
                  {t('welcome.hello')} <br /> <span className="text-accent">Tamara</span>
               </h2>
               <p className="max-w-[550px] mb-9 text-white/90">
                  {t('welcome.presentation')}
               </p>

               {/* btn and socials */}
               <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button
                     asChild
                     variant="outline"
                     size="lg"
                     className="uppercase flex items-center gap-2">
                     <a href="./assets/cv-tamara-vandebroeck.pdf"
                        target="_blank"
                        aria-label="Consulter mon CV"
                        rel="noopener noreferrer"
                        role="button">
                        <span>{t('welcome.downloadResume')}</span>
                        <FiDownload className="text-xl" aria-hidden="true" />
                     </a>
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
   );
};

export default Welcome;