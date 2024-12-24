import Header from './components/Header/Header';
import Welcome from './sections/Welcome/Welcome';
import Services from './sections/Services/Services';
import Resume from './sections/Resume/Resume';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

   return (
      <>
         <Header />
         <main>
            <section id="welcome" className="xl:h-[calc(100vh-130px)]">
               <Welcome />
            </section>
            <section id="services" className="xl:h-[calc(100vh-130px)]">
               <Services />
            </section>
            <section id="resume" className="xl:h-[calc(100vh-130px)]">
               <Resume />
            </section>
            <section id="work" className="xl:h-[calc(100vh-130px)]">
               <Work />
            </section>
            <section id="contact" className="xl:h-[calc(100vh-130px)]">
               <Contact />
            </section>
         </main>
         <Footer />
      </>
   );
}

export default App;
