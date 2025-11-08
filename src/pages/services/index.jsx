import { useNavigate } from 'react-router';
import { footerImg, lineImg, tapeImg } from '../../assets';
import Card from '../../components/ui/card';
import { services } from '../../config';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full flex items-cente flex-col items-center justify-center font-[Halant] overflow-x-hidden">
      <h1 className="text-[3vw] w-[67vw] text-[#252729] text-center  mt-30 md:mt-0 md:w-[50vw] md:text-[2vw]">
        The storyboard reveals the breadth of our craft.
        <img src={lineImg} alt="underline" className="w-full object-contain" />
      </h1>
      <div className="flex flex-col justify-center md:w-[60vw] my-20 mt-10 gap-5 md:flex-row md:mb-20">
        {services.map(({ img, title, rotate, tape, url }, i) => (
          <Card
            key={i}
            className={`
            relative
            flex flex-col w-full lg:w-1/3 items-center origin-top
            transform-[perspective(800px)_rotateX(15deg)_translateZ(5px)]
            hover:transform-[perspective(800px)_rotateX(10deg)_translateZ(2px)]
            hover:shadow-[0px_4px_12px_0px_#00000020]
            active:transform-[perspective(800px)_rotateX(0deg)_translateZ(0)]
            active:shadow-[0px_2px_6px_0px_#00000010] 
            motion-safe:transition-all motion-safe:duration-500 motion-reduce:transition-none motion-reduce:duration-[0ms] ease-in-out 
            ${rotate}
            m-10 md:mx-0 select-none cursor-pointer
          `}
            onClick={() => navigate(url)}
          >
            <img src={tapeImg} alt="tape" className={`absolute ${tape}`} />
            <img
              className="aspect-9/16 h-[60vw] w-full object-cover md:h-[20vw]"
              src={img}
              alt="Film Production"
            />
            <p className="pt-3">{title}</p>
          </Card>
        ))}
      </div>
      <footer className=" absolute bottom-0">
        <img
          src={footerImg}
          alt="footer"
          className="w-full min-h-14 object-cover bg-blend-multiply "
        />
      </footer>
    </section>
  );
};

export default Services;
