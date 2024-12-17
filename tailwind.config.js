/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ["class"],
   content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
   prefix: "",
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: '1.5rem',
            sm: '1rem',
         }
      },
      screens: {
         sm: '640px',
         md: '768px',
         lg: '960px',
         xl: '1280px'
      },
      fontFamily: {
         primary: 'var(--font-jetbrainsMono)'
      },
      extend: {
         colors: {
            primary: '#393F4D',
            accent: {
               DEFAULT: '#56e39f',
               hover: '#00e187'
            }
         },
         keyframes: {
            'accordion-down': {
               from: {
                  height: '0'
               },
               to: {
                  height: 'var(--radix-accordion-content-height)'
               }
            },
            'accordion-up': {
               from: {
                  height: 'var(--radix-accordion-content-height)'
               },
               to: {
                  height: '0'
               }
            }
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out'
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
         }
      }
   },
   plugins: [require("tailwindcss-animate")],
};

