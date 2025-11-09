const Button = ({ children, className, variant, ...props }) => {
  const baseClasses = 'text-base rounded-3xl px-4 py-3 cursor-pointer';

  switch (variant) {
    case 'outline':
      return (
        <button
          className={`border-2 border-primary text-primary bg-transparent ${baseClasses} ${className}`.trim()}
          {...props}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className={`bg-primary text-white shadow-[0_4px_12px_0_#00000033] ${baseClasses} ${className}`.trim()}
          {...props}
        >
          {children}
        </button>
      );
  }
};

export default Button;
