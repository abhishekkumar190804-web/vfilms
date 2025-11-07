import { logo, mandalaImg } from '../../assets';

const Mandal = () => {
  return (
    <div className="relative aspect-square w-96 h-fit">
      <img
        src={mandalaImg}
        alt="Mandala"
        className="motion-safe:animate-[spin_12s_linear_reverse_infinite] motion-reduce:animate-none w-full object-contain select-none"
      />
      <img
        src={logo}
        alt="vFilms"
        className="absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 object-contain select-none"
      />
    </div>
  );
};

export default Mandal;
