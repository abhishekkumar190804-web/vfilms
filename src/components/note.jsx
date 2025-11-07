import { noteImg, paperClipImg } from '../assets';

const Note = ({ children, className = '', clip = true }) => (
  <div className={`relative bg-[#f3e1c2] ${className}`.trim()}>
    {clip && (
      <img
        src={paperClipImg}
        alt="clip"
        className="absolute right-1 -top-4 w-1/12 origin-bottom rotate-18"
      />
    )}
    <img
      src={noteImg}
      alt="note"
      className="w-full h-full object-cover opacity-70 mix-blend-multiply"
    />
    {children}
  </div>
);

export default Note;
