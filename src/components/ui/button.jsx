const Button = ({ children, className,...props }) => (
  <button
    className={`bg-[#F15D2B] text-base text-[#FFFFFF] rounded-3xl px-4 py-3 shadow-[0_4px_12px_0_#00000033] cursor-pointer ${className}`.trim()}
    {...props}
  >
    {children}
  </button>
);

export default Button;
