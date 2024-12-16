import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const socials = [
   { icon: <FaGithub />, path: "https://github.com/TamVdb" },
   { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/tamaravandebroeck/" },
   { icon: <BsGlobe />, path: "https://www.zestcitron.be/" },
];

const Social = ({ containerStyles, iconStyles }) => {
   return (
      <div className={containerStyles}>
         {socials.map((item, index) => {
            return (
               <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconStyles}
               >
                  {item.icon}
               </a>
            );
         })}
      </div>
   );
};

export default Social;
