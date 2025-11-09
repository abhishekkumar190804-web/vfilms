const Input = ({ type, className, ...props }) =>
  type === 'text-area' ? (
    <textarea
      className={`bg-white/70 backdrop-blur-xs w-full py-2.5 px-3 rounded-xs 
  placeholder:text-placeholder resize-none
  
  focus:outline-none focus-visible:ring-2
   focus-visible:ring-primary focus-visible:border-transparent 

  motion-safe:transition motion-safe:durtaion-200
   motion-reduce:transition-none motion-reduce:duration-[0ms] 
   ${className}`}
      {...props}
    />
  ) : (
    <input
      type={type}
      className={`bg-white/70 backdrop-blur-xs w-full py-2.5 px-3 rounded-xs 
      placeholder:text-placeholder focus:outline-none
      focus-visible:ring-2 focus-visible:ring-primary
      focus-visible:border-transparent motion-safe:transition 
      motion-safe:durtaion-200 motion-reduce:transition-none
      motion-reduce:duration-[0ms] 
       ${className}`}
      {...props}
    />
  );

export default Input;
