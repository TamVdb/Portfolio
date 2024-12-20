import { Button } from './../ui/button';
import { Link } from 'react-router-dom';

// Components
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';

const Header = () => {

   const handleScrollToTop = () => {
      const backToTop = document.getElementById('welcome');
      const headerHeight = document.querySelector('header').offsetHeight;

      if (backToTop) {
         window.scrollTo({
            top: backToTop.offsetTop - headerHeight,
            behavior: 'smooth',
         });
      }
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
               <Link to="/contact">
                  <Button>Contact</Button>
               </Link>
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