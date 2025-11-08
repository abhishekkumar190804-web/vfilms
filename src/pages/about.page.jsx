import Mountain from '../components/mountain';

const About = () => (
  <section className="flex flex-col lg:flex-row container min-h-screen">
    <div className="flex-1 import Mountain from '../components/mountain';

const About = () => (
  <section className="flex flex-col lg:flex-row min-h-screen">
    {/* LEFT SIDE — Centered text */}
    <div className="flex-1 flex flex-col items-center justify-center text-[#252729] px-6 lg:px-12 text-center lg:text-left">
      <h1 className="font-[Halant] text-3xl lg:text-4xl mb-4">
        A montage of familiar faces and names.
      </h1>
      <p className="font-[Instrument_Sans] max-w-md">
        Some stories come from the biggest names. Others begin with bold, rising
        voices. We’ve been fortunate to walk alongside both — listening,
        creating, and building stories that matter.
      </p>
    </div>

    {/* RIGHT SIDE — Text + Mountain */}
    <div className="relative flex-1 flex flex-col justify-center px-6 lg:px-12">
      <h1 className="font-[Halant] text-2xl lg:text-3xl mb-4">
        Every project is more than just a brief — it’s a new chapter waiting to
        be written. Together, we've crafted tales that inspire, connect, and
        endure.
      </h1>

      {/* Mountain at bottom-right, half-visible */}
      <div className="fixed bottom-0 right-0 translate-y-1/2">
        <Mountain />
      </div>
    </div>
  </section>
);

export default About;
 text-[#252729]">
      <div className="">
        <h1 className="font-[Halant] text-4xl">
          A montage of familiar faces and names.
        </h1>
        <p className="font-[Instrument_Sans]">
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We’ve been fortunate to walk alongside both -
          listening, creating, and building stories that matter.
        </p>
      </div>
    </div>
    <div className="flex-1">
      <h1 className="font">
        Every project is more than just a brief - it’s a new chapter waiting to
        be written. Together, we've crafted tales that inspire, connect, and
        endure.
      </h1>
      <div className="fixed bottom-0 right-0 translate-y-1/2">
        <Mountain />
      </div>
    </div>
  </section>
);

export default About;
