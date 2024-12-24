import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

const info = [
   {
      icon: <FaPhoneAlt />,
      title: "Téléphone",
      description: "+32 477 73 26 49",
      path: "tel:0032477732649",
   },
   {
      icon: <FaLinkedinIn />,
      title: "Trouvez-moi sur",
      description: "LinkedIn",
      path: "https://www.linkedin.com/in/tamaravandebroeck/",
   },
   {
      icon: <FaMapMarkerAlt />,
      title: "Localisation",
      description: "Bruxelles",
      path: "",
   },
];

import { motion } from "framer-motion";

const Contact = () => {

   const form = useRef();
   const [formMessage, setFormMessage] = useState("");
   const [isError, setIsError] = useState(false);

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            'service_u57cmhz',       // Remplace par ton Service ID
            'template_m9294p3',      // Remplace par ton Template ID
            form.current,
            'lhYZnZhryRkLSBuVy'        // Remplace par ta clé publique
         )
         .then(
            () => {
               setIsError(false);
               setFormMessage('Votre message a été envoyé avec succès !');
               console.log('Message envoyé avec succès !');
               form.current.reset();
            },
            (error) => {
               setIsError(true);
               setFormMessage('Une erreur s’est produite. Veuillez réessayer.');
               console.log('Erreur lors de l’envoi...', error);
            }
         );
   };

   return (
      <motion.section
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, ease: "easeOut" }}
         viewport={{ once: true, amount: 0.5 }}
      >
         <div className="container mx-auto">
            <div className="flex flex-col justify-center py-8 xl:py-10">
               <h2 className="mx-auto lg:mx-0 mb-6 text-lg text-accent">Contact</h2>
               <div className="flex flex-col xl:flex-row gap-[30px]">

                  {/* Form */}
                  <div className="xl:w-2/3">
                     <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-4 sm:p-10 bg-[#23262e] rounded-xl">
                        <h3 className="text-4xl text-accent">Contactez-moi</h3>
                        <p className="text-white/90">
                           Une idée, une question ou juste envie de dire bonjour ? Laissez-moi un petit mot, je serais ravie de vous lire.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="relative">
                              <Input type="text" name="firstname" placeholder="Prénom" className="peer" required />
                              <span className="text-sm absolute right-2 top-1 text-red-500 hidden peer-placeholder-shown:block">*</span>
                           </div>
                           <div className="relative">
                              <Input type="text" name="lastname" placeholder="Nom" className="peer" required />
                              <span className="text-sm absolute right-2 top-1 text-red-500 hidden peer-placeholder-shown:block">*</span>
                           </div>
                           <div className="relative">
                              <Input type="email" name="email" placeholder="Email" className="peer" required />
                              <span className="text-sm absolute right-2 top-1 text-red-500 hidden peer-placeholder-shown:block">*</span>
                           </div>
                           <Input type="text" name="phone" placeholder="Téléphone" />
                        </div>

                        <div className="relative">
                           <Textarea className="h-[200px] peer" name="message" placeholder="Message" required />
                           <span className="text-sm absolute right-2 top-1 text-red-500 hidden peer-placeholder-shown:block">*</span>
                        </div>

                        <Button type="submit" size="md" className="max-w-40">Envoyer</Button>

                        {formMessage && (
                           <p className={isError ? "text-red-500 mt-2" : "text-white mt-2"}>
                              {formMessage}
                           </p>
                        )}

                     </form>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex items-center xl:justify-center mb-8 xl:mb-0">
                     <ul className="flex flex-col sm:flex-row xl:flex-col gap-6">
                        {info.map((item, index) => (
                           <li key={index} className="flex items-center gap-6">
                              {item.path ? (
                                 <a href={item.path} target="_blank">
                                    <div className="w-12 h-12 xl:w-14 xl:h-14 bg-[#23262e] text-accent rounded-md flex items-center justify-center">
                                       <div className="text-2xl">{item.icon}</div>
                                    </div>
                                 </a>
                              ) : (
                                 <div className="w-12 h-12 xl:w-14 xl:h-14 bg-[#23262e] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-2xl">{item.icon}</div>
                                 </div>
                              )}
                              <div className="flex-1">
                                 <p className="text-white/70">{item.title}</p>
                                 <h3 className="text-base sm:text-lg font-extralight">{item.description}</h3>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Contact;