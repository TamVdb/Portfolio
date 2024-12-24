import { FaHeart } from 'react-icons/fa';

const Footer = () => {

   const yearCopyrights = new Date().getFullYear();

   return (
      <footer className="bg-[#23262e] text-white mt-16">
         <div className="container mx-auto py-8">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
               <div className="inline-flex gap-4 items-center pb-2 lg:pb-0">
                  <img src="./assets/logo-tamara.png" alt="Logo Portfolio Tamara Vandebroeck" className="w-10 h-10 sm:w-12 sm:h-12" />
                  <p className="font-semibold text-2xl sm:text-3xl">Tamara<span className="text-accent">.</span></p>
               </div>
               <p className="leading-normal text-center lg:text-right text-white font-thin text-[15px]">© {yearCopyrights} -  All rights reserved • Made with <FaHeart className="inline-block text-accent" /> by Tamara Vandebroeck</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;