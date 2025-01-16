import { motion } from "framer-motion";

const Photo = () => {
   return (
      <div className="w-full h-full relative">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{
               opacity: 1,
               transition: { delay: 1, duration: 0.4, ease: "easeIn" },
            }}
         >
            {/* image */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
               }}
               className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute"
            >
               <img
                  // src="./assets/photo.png"
                  src="./assets/tam.png"
                  alt="Photo de présentation de Tamara Vandebroeck"
                  className="object-contain w-full h-full"
               />
            </motion.div>

            {/* circle */}
            <motion.svg
               className="w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]"
               fill="transparent"
               viewBox="0 0 500 500"
               xmlns="http://www.w3.org/2000/svg"
            >
               <motion.circle
                  cx="253"
                  cy="253"
                  r="250"
                  stroke="#00ff99"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                     strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                     rotate: [120, 360],
                  }}
                  transition={{
                     duration: 20,
                     repeat: Infinity,
                     repeatType: "reverse",
                  }}
               />
            </motion.svg>
         </motion.div>
      </div>
   );
};

export default Photo;
