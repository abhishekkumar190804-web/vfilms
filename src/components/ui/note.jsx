import { noteImg, paperClipImg } from '../../assets';

const Note = ({ children, className = '', clip = true }) => (
  <div
    className={`
      relative 
      bg-[#f3e1c2]
      bg-cover bg-center bg-no-repeat 
      bg-blend-multiply
      shadow-[0px_12px_40px_0px_#00000026]
      ${className}
    `.trim()}
    style={{ backgroundImage: `url(${noteImg})` }}
  >
    {clip && (
      <img
        src={paperClipImg}
        alt="clip"
        className="absolute right-1 -top-4 w-1/12 origin-bottom rotate-18 drop-shadow-md"
      />
    )}
    <div className="relative z-10 p-4">{children}</div>
  </div>
);

export default Note;
