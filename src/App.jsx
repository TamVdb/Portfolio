import Header from './components/Header/Header';
import Welcome from './sections/Welcome/Welcome';
import Services from './sections/Services/Services';
import Resume from './sections/Resume/Resume';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import './utils/i18n';

function App() {

   return (
      <>
         <Header />
         <main>
            <section id="welcome" className="py-8 2xl:py-10">
               <Welcome />
            </section>
            <section id="services" className="py-8 2xl:py-10">
               <Services />
            </section>
            <section id="resume" className="py-8 2xl:py-10">
               <Resume />
            </section>
            <section id="work" className="py-8 2xl:py-10">
               <Work />
            </section>
            <section id="contact" className="py-8 2xl:py-10">
               <Contact />
            </section>
         </main>
         <Footer />
      </>
   );
}

export default App;
