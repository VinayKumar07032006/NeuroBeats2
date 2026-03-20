import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', asChild = false, isLoading = false, children, ...props }, ref) => {
   const Comp = asChild ? Slot : "button";

   const variants = {
      primary: "bg-[#b026ff] hover:bg-[#9a1ce6] text-white shadow-[0_0_15px_rgba(176,38,255,0.4)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] border border-white/10",
      secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/10",
      outline: "border-2 border-[#b026ff] text-[#b026ff] hover:bg-[#b026ff]/10 hover:shadow-[0_0_15px_rgba(176,38,255,0.3)]",
      ghost: "hover:bg-white/10 text-gray-300 hover:text-white",
      neonBlue: "bg-[#00f0ff] hover:bg-[#00d5e6] text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)]",
      neonPink: "bg-[#ff0055] hover:bg-[#e6004c] text-white shadow-[0_0_15px_rgba(255,0,85,0.4)] hover:shadow-[0_0_25px_rgba(255,0,85,0.6)]",
   };

   const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-14 rounded-xl px-8 text-lg flex items-center justify-center",
      icon: "h-11 w-11",
   };

   return (
      <Comp
         className={cn(
            "inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            sizes[size],
            className
         )}
         ref={ref}
         disabled={isLoading || props.disabled}
         {...props}
      >
         {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
         {children}
      </Comp>
   );
});
Button.displayName = "Button";

export { Button };
