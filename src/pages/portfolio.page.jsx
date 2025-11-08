import { cameraImg, circularDesignImg, productionServicesImg } from '../assets';
import HollowCircle from '../components/background/hollow';
import Player from '../components/ui/player';

const Portfolio = () => (
  <div className="relative flex flex-col justify-center items-center w-screen text-[#252729]">
    <img
      src={cameraImg}
      alt="camera"
      className="absolute h-[50vw] left-1/10 top-1/8 lg:top-1/4 lg:h-[25vw] lg:left-1/12"
    />
    <h1 className="font-[Halant] text-4xl z-2">The Highlight Reel</h1>
    <p className="font-[Instrument_Sans]">Watch the magic we’ve captured.</p>
    <Player className="mt-10 w-[75vw] md:w-[50vw] justify-evenly select-none z-2">
      <img
        src={productionServicesImg}
        alt="video sample"
        className="w-full h-full"
      />
    </Player>
    <div className="absolute bottom-0 right-0 overflow-hidden">
      <HollowCircle
        duration="30s"
        img={circularDesignImg}
        className="translate-y-1/2 translate-x-4/6 w-[150vw]"
      />
    </div>
  </div>
);

export default Portfolio;
