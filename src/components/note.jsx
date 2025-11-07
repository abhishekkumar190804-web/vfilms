import { noteImg, paperClipImg } from '../assets';

const Note = ({ content = '', className = '', clip = true }) => (
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
    <p className="absolute top-0 left-0 m-10 my-12 font-[Halant] text-[#0F3255] text-[0.9rem]">{content}</p>
  </div>
);

export default Note;
