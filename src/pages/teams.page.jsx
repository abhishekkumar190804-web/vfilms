import { indiaGateImg } from '../assets';
import Note from '../components/note';
import Team from '../components/team';
const Teams = () => {
  return (
    <div className="relative container flex flex-col items-center mt-20 lg:mt-0 lg:block lg:h-screen">
      <div className="w-full flex justify-center mb-20 lg:absolute lg:top-12 lg:right-75">
        <Note className="shadow-[0px_12px_40px_0px_#00000026] h-66 w-88 -rotate-12 z-10">
          <p className="absolute top-0 left-0 m-10 font-[Halant] text-[#0F3255] text-[0.9rem]">
            Some craft films. Some build brands. Some curate art. We bring it
            all together - a collective of storytellers driven by one belief:
            every project deserves to be more than just a message; it should
            become a masterpiece. From first spark to final frame, from raw
            ideas to timeless visuals - we shape stories that stay with you.
          </p>
        </Note>
      </div>
      <div className="lg:w-[50vw] lg:h-50vh lg:absolute lg:right-0">
        <Team />
      </div>
      <div className="my-10 w-full flex justify-end lg:justify-start lg:my-0 lg:absolute lg:bottom-0 lg:left-4">
        <img
          src={indiaGateImg}
          alt="India Gate"
          className="h-56 md:h-80 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Teams;
