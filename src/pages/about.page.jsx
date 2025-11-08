import Mountain from '../components/mountain';
import Note from '../components/note';

const cards = [
  {
    head: '85+',
    body: 'Projects',
  },
  {
    head: '50+',
    body: 'Happy Clients',
  },
  {
    head: '10+',
    body: 'Expert Team',
  },
];

const About = () => (
  <section className="flex flex-col lg:flex-row min-h-screen conatiner overflow-hidden lg:overflow-none">
    {/* LEFT SIDE — Centered text */}
    <div className="flex-1 flex flex-col items-center justify-center text-[#252729] px-6 lg:px-12 text-center">
      <h1 className="font-[Halant] text-3xl lg:text-4xl mb-4">
        A montage of familiar faces and names.
      </h1>
      <p className="font-[Instrument_Sans] max-w-md sm:mt-[2vh] lg:mt-[5vh]">
        Some stories come from the biggest names. Others begin with bold, rising
        voices. We’ve been fortunate to walk alongside both - listening,
        creating, and building stories that matter.
      </p>
      <div className="flex mt-10">
        {cards.map((item, _) => (
          <Note
            key={_}
            clip={false}
            className="aspect-250/230 w-1/3 rotate-12 font-[Instrument_Sans] flex items-center justify-start"
          >
            <h3 className=" text-[#103255] text-3xl md:text-5xl px-6 md:px-10">
              {item.head}
            </h3>
            <p className="text-[#F15D2B] text-sm md:text-base">{item.body}</p>
          </Note>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE — Text + Mountain */}
    <div className="relative flex-1 text-[#0F3255]">
      <h1 className="font-[Island_Moments] text-3xl lg:text-5xl text-center lg:mt-20 px-6">
        Every project is more than just a brief - it’s a new chapter waiting to
        be written. Together, we've crafted tales that inspire, connect, and
        endure.
      </h1>
      <div className="relative">
        <div className="absolute -top-1/2 lg:top-auto lg:fixed bottom-0 right-0 lg:translate-y-1/2">
          <Mountain />
        </div>
      </div>
    </div>
  </section>
);

export default About;
