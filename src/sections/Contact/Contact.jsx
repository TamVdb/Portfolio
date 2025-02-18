import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Icons
import { FaPhoneAlt, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const Contact = () => {

   const { t } = useTranslation();

   const info = [
      {
         icon: <FaPhoneAlt />,
         title: t('info.phone.title'),
         description: t('info.phone.description'),
         path: t('info.phone.path'),
         name: t('info.phone.name'),
      },
      {
         icon: <FaLinkedinIn />,
         title: t('info.linkedin.title'),
         description: t('info.linkedin.description'),
         path: t('info.linkedin.path'),
         name: t('info.linkedin.name'),
      },
      {
         icon: <FaMapMarkerAlt />,
         title: t('info.location.title'),
         description: t('info.location.description'),
         path: t('info.location.path'),
         name: t('info.location.name'),
      },
   ];

   const form = useRef();
   const [formMessage, setFormMessage] = useState("");
   const [isError, setIsError] = useState(false);

   const formSchema = z.object({
      firstname: z.string().min(2, { message: "Le prénom est requis (min. 2 caractères)." }),
      lastname: z.string().min(2, { message: "Le nom est requis (min. 2 caractères)." }),
      email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
      message: z.string().min(10, { message: "Votre message doit contenir au moins 10 caractères." }),
   });

   const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(formSchema) });

   const sendEmail = (data) => {
      emailjs
         .sendForm(
            import.meta.env.VITE_APP_EMAIL_SERVICE_ID,      // Service ID
            import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,     // Template ID
            form.current,
            import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY       // Public Key
         )
         .then(
            () => {
               setIsError(false);
               setFormMessage('Votre message a été envoyé avec succès !');
               form.current.reset();
            },
            (error) => {
               setIsError(true);
               setFormMessage('Une erreur s’est produite. Veuillez réessayer.');
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
            <div className="flex flex-col justify-center">
               <h2 className="mx-auto lg:mx-0 mb-6 text-lg text-accent">Contact</h2>
               <div className="flex flex-col xl:flex-row gap-[30px]">

                  {/* Form */}
                  <div className="xl:w-2/3">
                     <form ref={form} onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-6 p-4 sm:p-10 bg-[#23262e] rounded-xl">
                        <h3 className="text-4xl text-accent">{t('form.title')}</h3>
                        <p className="text-white/90">
                           {t('form.description')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="relative">
                              <Input type="text" name="firstname" placeholder={t('form.firstname')} className="peer" {...register("firstname")} required />
                              <span className="text-sm absolute right-2 top-1 text-rose-400 hidden peer-placeholder-shown:block">*</span>
                              {errors.firstname && <span className="text-sm text-rose-400">{errors.fistname.message}</span>}
                           </div>
                           <div className="relative">
                              <Input type="text" name="lastname" placeholder={t('form.lastname')} className="peer" {...register("lastname")} required />
                              <span className="text-sm absolute right-2 top-1 text-rose-400 hidden peer-placeholder-shown:block">*</span>
                              {errors.lastname && <span className="text-sm text-rose-400">{errors.lastname.message}</span>}
                           </div>
                           <div className="relative">
                              <Input type="email" name="email" placeholder="Email" className="peer" {...register("email")} required />
                              <span className="text-sm absolute right-2 top-1 text-rose-400 hidden peer-placeholder-shown:block">*</span>
                              {errors.email && <span className="text-sm text-rose-400">{errors.email.message}</span>}
                           </div>
                           <Input type="text" name="phone" placeholder={t('form.phone')} {...register("phone")} />
                        </div>

                        <div className="relative">
                           <Textarea className="h-[200px] peer" name="message" placeholder="Message" {...register("message")} required />
                           <span className="text-sm absolute right-2 top-1 text-rose-400 hidden peer-placeholder-shown:block">*</span>
                           {errors.message && <span className="text-sm text-rose-400">{errors.message.message}</span>}
                        </div>

                        <Button type="submit" size="md" className="max-w-40" aria-label="Envoyer le message">{t('form.submit')}</Button>

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
                                 <a href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className="linkSocials">
                                    <div className="w-12 h-12 xl:w-14 xl:h-14 bg-[#23262e] text-accent rounded-md flex items-center justify-center">
                                       <div className="text-2xl">{item.icon}</div>
                                       <span className="sr-only">{item.name}</span>
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