import Mandal from './background/mandal';

// todo: implement container before finalising

const Hero = () => (
  <section className="flex flex-col lg:flex-row h-screen">
    {/* Left Side */}
    <div className="flex w-full lg:w-1/2 items-center justify-center my-10 mt-20 lg:m-0">
      <Mandal />
    </div>

    {/* Right Side */}
    <div className="flex flex-col w-full lg:w-1/2 items-center justify-center">
      <h1 className="mx-14 md:mx-32 lg:m-0 lg:mr-32 font-[Island_Moments] font-normal text-[#0F3255] text-6xl text-center">
        Varnan is where stories find their voice and form
      </h1>
      <h2 className="mx-14 md:mx-32 lg:m-0 lg:mr-32 py-10 font-[Halant] font-normal text-[#F15D2B] text-3xl text-center">
        Films . Brands . Art
      </h2>
      <p className="mx-20 mb-16 md:mb-0 md:mx-14 lg:mr-48 font-[Instrument_Sans] text-center text-[#252729] motion-safe:animate-[fadeUp_1s_ease-out_forwards] motion-reduce:animate-none">
        {' '}
        Since 2009, V’ve been telling stories - stories of people, their
        journeys, and the places that shape them. Some begin in polished
        boardrooms, others in humble village squares. But every story starts the
        same way - by listening with intention. V believes it takes trust,
        patience, and an eye for the unseen to capture what truly matters. V
        doesn’t just tell stories - V honors them.
      </p>
    </div>
  </section>
);

export default Hero;
