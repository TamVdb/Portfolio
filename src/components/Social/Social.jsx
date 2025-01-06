import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const socials = [
   { icon: <FaGithub />, path: "https://github.com/TamVdb" },
   { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/tamaravandebroeck/" },
   { icon: <BsGlobe />, path: "https://www.zestcitron.be/" },
];

const Social = () => {
   return (
      <div className="flex gap-6">
         {socials.map((item, index) => {
            return (
               <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-xl hover:bg-accent hover:text-primary hover:transition-all duration-500 linkSocials"
               >
                  {item.icon}
               </a>
            );
         })}
      </div>
   );
};

export default Social;
