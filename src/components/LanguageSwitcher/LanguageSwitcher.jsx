import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
   const { i18n } = useTranslation();
   const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

   const switchLanguage = (lng) => {
      i18n.changeLanguage(lng);
      setIsEnglish(lng === 'en');
   };

   useEffect(() => {
      // Met à jour l'état lorsque la langue change via i18n
      setIsEnglish(i18n.language === 'en');
   }, [i18n.language]);

   return (
      <div className="flex items-center gap-4">
         <div
            className="relative inline-block w-[68px] h-[36px] rounded-full bg-[#23262e] cursor-pointer"
            onClick={() => switchLanguage(isEnglish ? 'fr' : 'en')}
         >
            <div
               className={`absolute top-1 left-1 w-[28px] h-[28px] bg-primary rounded-full transition-transform duration-300 ${isEnglish ? 'transform translate-x-8' : ''} flex items-center justify-center`}
            >
               <span className="text-sm font-bold text-accent">
                  {isEnglish ? 'EN' : 'FR'}
               </span>
            </div>
         </div>
      </div>
   );
};

export default LanguageSwitcher;
