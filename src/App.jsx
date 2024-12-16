import './App.css';
import Header from './components/Header/Header';
import Welcome from './sections/Welcome/Welcome';
import Services from './sections/Services/Services';
import Resume from './sections/Resume/Resume';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';

function App() {

   return (
      <>
         <Header />
         <main>
            <section id="welcome" className="section-height">
               <Welcome />
            </section>
            <section id="services" className="section-height">
               <Services />
            </section>
            <section id="resume" className="section-height">
               <Resume />
            </section>
            <section id="work" className="section-height">
               <Work />
            </section>
            <section id="contact" className="section-height">
               <Contact />
            </section>
         </main>
      </>
   );
}

export default App;
