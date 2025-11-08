import { playButtonImg, reelButtonImg, reelImg } from '../../assets';

const Player = ({ children, className = '' }) => (
  <div
    className={`
    relative aspect-981/603 bg-no-repeat bg-contain bg-center
    flex items-center justify-center
    ${className}
  `.trim()}
    style={{ backgroundImage: `url(${reelImg})` }}
  >
    <div className="relative w-full flex justify-evenly items-center h-2/3 py-2 md:py-0">
      <button className="bg-white px-2 mx-2 flex items-center justify-center h-full cursor-pointer">
        <img
          src={reelButtonImg}
          alt="Previous"
          className="object-contain scale-x-[-1]"
        />
      </button>

      {children}
      <img src={playButtonImg} alt="play" className="absolute w-[10%] cursor-pointer" />

      <button className="bg-white px-2 mx-2 flex items-center justify-center h-full cursor-pointer">
        <img src={reelButtonImg} alt="Next" className="object-contain" />
      </button>
    </div>
  </div>
);

export default Player;
