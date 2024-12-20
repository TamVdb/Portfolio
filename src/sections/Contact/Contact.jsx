import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
   {
      icon: <FaPhoneAlt />,
      title: "Téléphone",
      description: "(+32) 477 73 26 49",
   },
   {
      icon: <FaEnvelope />,
      title: "Email",
      description: "youremail@gmail.com",
   },
   {
      icon: <FaMapMarkerAlt />,
      title: "Localisation",
      description: "Bruxelles",
   },
];

import { motion } from "framer-motion";

const Contact = () => {
   const form = useRef();

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
               console.log('Message envoyé avec succès !');
               alert('Votre message a été envoyé avec succès !');
            },
            (error) => {
               console.log('Erreur lors de l’envoi...', error.text);
               alert("Une erreur s'est produite. Veuillez réessayer.");
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
                  <div className="xl:w-[54%]">
                     <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#23262e] rounded-xl">
                        <h3 className="text-4xl text-accent">Travaillons ensemble !</h3>
                        <p className="text-white/90">
                           Une idée, une question ou juste envie de dire bonjour ? Laissez-moi un petit mot, je serais ravie de vous lire.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <Input type="text" name="user_firstname" placeholder="Prénom" required />
                           <Input type="text" name="user_lastname" placeholder="Nom" required />
                           <Input type="email" name="user_email" placeholder="Email" required />
                           <Input type="text" name="user_phone" placeholder="Téléphone" />
                        </div>

                        <Textarea className="h-[200px]" name="message" placeholder="Message" required />

                        <Button type="submit" size="md" className="max-w-40">
                           Envoyer
                        </Button>
                     </form>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex items-center xl:justify-end mb-8 xl:mb-0">
                     <ul className="flex flex-row xl:flex-col gap-6">
                        {info.map((item, index) => (
                           <li key={index} className="flex items-center gap-6">
                              <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#23262e] text-accent rounded-md flex items-center justify-center">
                                 <div className="text-[28px]">{item.icon}</div>
                              </div>
                              <div className="flex-1">
                                 <p className="text-white/70">{item.title}</p>
                                 <h3 className="text-xl font-extralight">{item.description}</h3>
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