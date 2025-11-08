import { indiaGateImg } from '../assets';
import Note from '../components/ui/note';
import Team from '../components/team';
const Teams = () => {
  return (
    <section className="relative container flex flex-col items-center mt-20 lg:block">
      <div className="w-full flex justify-center mb-20 lg:absolute lg:-top-6 lg:right-75">
        <Note className="h-fit w-[20rem] -rotate-12 z-10">
          <p className="font-[Halant] text-[#0F3255] text-[0.9rem] p-5">
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
    </section>
  );
};

export default Teams;
