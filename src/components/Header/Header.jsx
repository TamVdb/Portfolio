import { Button } from './../ui/button';
import { Link } from 'react-router-dom';

// Components
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {

   const handleScroll = (id) => {
      const section = document.getElementById(id);
      const headerHeight = document.querySelector('header').offsetHeight;

      if (section) {
         window.scrollTo({
            top: section.offsetTop - headerHeight,
            behavior: 'smooth',
         });
      }
   };

   const handleScrollToTop = () => {
      handleScroll('welcome');
   };

   return (
      <header className="bg-primary py-8 text-white xl:sticky xl:top-0 xl:z-50">
         <div className="container mx-auto flex justify-between items-center">

            {/* Logo */}
            <Link to="/" onClick={handleScrollToTop}>
               <div className="inline-flex gap-4 items-center">
                  <img src="./assets/logo-tamara.png" alt="Logo Portfolio Tamara Vandebroeck" className="w-10 h-10 sm:w-14 sm:h-14" />
                  <h1>Tamara<span className="text-accent">.</span></h1>
               </div>
            </Link>

            {/* Desktop nav & contact btn */}
            <div className="hidden xl:flex items-center gap-8">
               <Nav />
               <div onClick={() => handleScroll('contact')}>
                  <Button>Contact</Button>
               </div>
               <LanguageSwitcher />
            </div>

            {/* Mobile nav */}
            <div className="xl:hidden">
               <MobileNav />
            </div>
         </div>
      </header>
   );
};

export default Header;