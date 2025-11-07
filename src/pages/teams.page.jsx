  import { indiaGateImg } from '../assets';
  import Note from '../components/note';
  import Team from '../components/team';
  const Teams = () => {
    return (
      <div className="relative h-screen container">
        <div className="absolute top-12 md:left-36">
          <Note
            content="Some craft films. Some build brands. Some curate art. We bring it all together - a collective of storytellers driven by one belief: every project deserves to be more than just a message; it should become a masterpiece. From first spark to final frame, from raw ideas to timeless visuals - we shape stories that stay with you."
            className="shadow-[0px_12px_40px_0px_#00000026] h-68 w-88 -rotate-12 z-10"
          />
        </div>
        <Team className={'absolute w-[50vw] h-screen right-0'} />
        <img
          src={indiaGateImg}
          alt="Inida Gate"
          className="absolute bottom-0 left-0 h-80"
        />
      </div>
    );
  };

  export default Teams;
