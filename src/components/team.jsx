import {
  leftArrowIcon,
  rightArrowIcon,
  teamImg,
  topArrowIcon,
} from '../assets';

const Team = ({ className }) => (
  <div className={className}>
    <div className="relative font-[Island_Moments] text-3xl text-[#103255]">
      <div className="absolute object-contain top-[14vh] right-[370px]">
        <div className="relative">
          <p className="absolute bottom-0 -left-20 w-fit ">Film Makers</p>
        </div>
        <img src={topArrowIcon} alt="arrow" />
      </div>
      <div className="absolute object-contain top-[300px] right-[570px]">
        <img src={leftArrowIcon} alt="arrow" />
        <div className="relative">
          <p className="absolute -bottom-10 -left-[130px] w-fit ">
            Branding Experts
          </p>
        </div>
      </div>
      <div className="absolute object-contain top-[130px] right-[60px]">
        <img src={rightArrowIcon} alt="arrow" />
        <div className="relative">
          <p className="absolute bottom-[150px] -right-[100px] w-fit ">
            Art Curators
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src={teamImg}
          alt="team"
          className="absolute w-90 top-50 right-44 object-contain"
        />
        <div className="absolute top-[450px] right-20 text-center">
          <p className="font-[Halant] text-2xl">
            Take a closer look at the stories V bring to life.
          </p>
          <button className="mt-10 bg-[#F15D2B] font-[Instrument_Sans] text-base text-[#FFFFFF] rounded-3xl  px-4 py-3 shadow-[0_4px_12px_0_#00000033] cursor-pointer">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
