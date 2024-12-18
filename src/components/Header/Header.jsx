import { Button } from './../ui/button';
import { Link } from 'react-router-dom';

// components
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';

const Header = () => {

   const handleScrollToTop = () => {
      const backToTop = document.getElementById('welcome');
      const headerHeight = document.querySelector("header").offsetHeight;

      if (backToTop) {
         window.scrollTo({
            top: backToTop.offsetTop - headerHeight,
            behavior: "smooth",
         });
      }
   };

   return (
      <header className="bg-primary py-8 xl:py-12 text-white xl:sticky xl:top-0 xl:z-50">
         <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link to="/" onClick={handleScrollToTop}>
               <h1>Tamara<span className="text-accent">.</span></h1>
            </Link>

            {/* desktop nav & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
               <Nav />
               <Link to="/contact">
                  <Button>Contact</Button>
               </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
               <MobileNav />
            </div>
         </div>
      </header>
   );
};

export default Header;