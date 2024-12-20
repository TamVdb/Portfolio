import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
   return (
      <input
         type={type}
         className={cn(
            "flex h-10 rounded-md border border-white/10 focus:border-accent font-extralight bg-primary px-4 py-4 text-base placeholder:text-white/60 outline-none",
            className
         )}
         ref={ref}
         {...props}
      />
   );
});
Input.displayName = "Input";

export { Input };
