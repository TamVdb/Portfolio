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
            <section id="welcome" className="xl:h-[calc(100vh-104px)]">
               <Welcome />
            </section>
            <section id="services" className="xl:h-[calc(100vh-104px)]">
               <Services />
            </section>
            <section id="resume" className="xl:h-[calc(100vh-104px)]">
               <Resume />
            </section>
            <section id="work" className="xl:h-[calc(100vh-104px)]">
               <Work />
            </section>
            <section id="contact" className="xl:h-[calc(100vh-104px)]">
               <Contact />
            </section>
         </main>
      </>
   );
}

export default App;
