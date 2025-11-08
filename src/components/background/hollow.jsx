const HollowCircle = ({
  reverse = false,
  duration = '12s',
  className="",
  img,
  children,
}) => (
  <div
    className={`relative aspect-square w-[75vw] md:w-[50vw] h-fit ${className}`.trim()}
  >
    <img
      src={img}
      alt="hollow image"
      style={{
        animation: `spin ${duration} linear infinite ${
          reverse ? 'reverse' : ''
        }`,
      }}
      className="w-full object-contain select-none motion-safe:animate-none motion-reduce:animate-none"
    />
{children}    
  </div>
);

export default HollowCircle;
