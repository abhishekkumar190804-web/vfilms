import { circularCompanyImg, sceneImg } from '../assets';

const Mountain = () => (
  <div className="relative aspect-square w-[75vw] md:w-[50vw] h-fit">
    <img
      src={circularCompanyImg}
      alt="companies"
      className="motion-safe:animate-[spin_15s_linear_reverse_infinite] motion-reduce:animate-none w-full object-contain select-none"
    />
    <img
      src={sceneImg}
      alt="mountain scene"
      className="absolute top-1/3 left-1/2 w-[50vw] md:w-[30vw] -translate-x-1/2 -translate-y-1/2 object-contain select-none"
    />
  </div>
);
export default Mountain;
