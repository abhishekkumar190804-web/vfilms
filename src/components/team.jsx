import { useNavigate } from 'react-router';
import {
  leftArrowIcon,
  rightArrowIcon,
  teamImg,
  topArrowIcon,
} from '../assets';
import Button from './ui/button';

const Team = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-20 md:mt-40 lg:m-0 lg:translate-y-1/3">
      <div className="relative font-island-moments text-navy-dark">
        <div className="absolute -top-[20vw] left-[7vw] md:-left-[1vw] lg:-top-[13vw] lg:-left-[2vw]">
          <p className="mt-1 text-[5vw] lg:text-[3.2vw] -translate-x-1/2">
            Film Makers
          </p>
          <img
            src={topArrowIcon}
            alt="top arrow"
            className="w-[16vw] lg:w-[12vw]"
          />
        </div>
        <div className="absolute top-[10vw] -left-[19vw] md:top-[4vw] lg:-left-[16vw] lg:top-[3vw] lg:rotate-12">
          <div>
            <img
              src={leftArrowIcon}
              alt="left arrow"
              className="w-[16vw] lg:w-[12vw]"
            />
            <p className="mt-1 text-[5vw] lg:text-[3.2vw] -translate-x-1/4 lg:-translate-x-1/2 -rotate-12">
              Branding Experts
            </p>
          </div>
        </div>
        <div className="absolute -top-[8vw] md:-top-[11vw] lg:-top-[4vw] -right-[22vw] lg:-right-[15vw]">
          <div>
            <p className="mt-1 text-[5vw] lg:text-[3.2vw]">Art Curators</p>
            <img
              src={rightArrowIcon}
              alt="right arrow"
              className="w-[8vw] lg:w-[5vw]"
            />
          </div>
        </div>
        <img
          src={teamImg}
          alt="team"
          className="w-[50vw] md:w-[30vw] lg:w-[20vw] object-contain"
        />
      </div>
      <div className="text-center mt-15 md:mt-25">
        <p className="font-halant text-[3vw] text-secondary md:text-[2vw]">
          Take a closer look at the stories V bring to life.
        </p>
        <Button
          className="mt-5 font-instrument-sans"
          onClick={() => navigate('/portfolio')}
        >
          View Portfolio
        </Button>
      </div>
    </div>
  );
};

export default Team;
