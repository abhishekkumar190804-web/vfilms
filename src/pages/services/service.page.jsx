import { exploreArrowImg, lineImg } from '../../assets';
import Card from '../../components/ui/card';
import Button from '../../components/ui/button';
import { useNavigate } from 'react-router';

const Service = ({ data }) => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full flex flex-col font-instrument-sans overflow-x-hidden">
      {data.icons.map(({ src, className }, i) => (
        <img
          key={i}
          src={src}
          className={`motion-safe:animate-float motion-reduce:animate-none ${className}`.trim()}
          alt={`icon-${i}`}
        />
      ))}

      <h1
        className={`font-halant w-full text-secondary text-center mt-25 lg:mt-20 text-extrabold self-center ${data.heading.className}`}
      >
        <Button
          variant="outline"
          className="py-1! mx-2
           hover:bg-primary/10 hover:rotate-10 
          active:bg-primary/15 active:rotate-30
          motion-safe:duration-100
          motion-reduce:duration-[0ms]"
          onClick={() => navigate('/services')}
        >
          <span className="inline-block transform scale-350 font-island-moments">
            &lt;
          </span>
        </Button>
        {data.heading.text}
        <img src={lineImg} alt="underline" className="w-full object-contain" />
      </h1>

      <div className="flex flex-col lg:flex-row z-2 mb-40 lg:m-6 gap-8">
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <Card className="w-[50vw] lg:w-[25vw] shadow-[0px_11.4px_60px_0px_#00000040] mt-10">
            <img
              className="aspect-68/73 w-full object-cover"
              src={data.card.img}
              alt={data.card.title}
            />
            <p className="text-center font-halant mt-3">{data.card.title}</p>
          </Card>
        </div>
        <div className="relative flex-1 flex flex-col items-center lg:items-start">
          <article className="w-fit p-3 rounded-md backdrop-blur-sm bg-primary/5">
            {data.body.description.map((desc, i) => (
              <h3 key={i} className="w-full lg:w-[25vw]">
                {desc}
              </h3>
            ))}
            <h3 className="w-full lg:w-[25vw]">{data.body.lists.title}</h3>
            {data.body.lists.points.map((point, i) => (
              <li key={i} className="ml-10">
                {point}
              </li>
            ))}
          </article>
          <div className="absolute -bottom-30 group lg:bottom-0 z-2">
            <button className="cursor-pointer backdrop-blur-md rounded-full group border border-primary p-3 lg:backdrop-blur-none md:border-none">
              <h3 className="text-2xl">Explore</h3>
              <img
                src={exploreArrowImg}
                alt="explore"
                className="group-hover:rotate-6 transition-transform duration-300 active:-rotate-12"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
