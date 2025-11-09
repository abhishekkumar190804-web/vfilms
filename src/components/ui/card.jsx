const Card = ({ children, className = '', onClick=null }) => (
  <div
    className={`bg-white shadow-[0px_11.4px_38px_0px_#00000040] px-4 py-3 ${className}`.trim()}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Card;
