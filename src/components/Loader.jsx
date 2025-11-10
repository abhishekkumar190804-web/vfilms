import { mandalaImg } from "../assets";
import HollowCircle from "./background/hollow";

const RouteLoad = () => (
  <div className="flex h-screen items-center">

  <div className="relative aspect-square w-fit h-fit flex justify-center items-center">
    <HollowCircle img={mandalaImg} className="overflow-hidden w-1/2! md:w-1/3!" />
    <h1 className="absolute text-3xl font-island-moments text-navy-dark">Loading</h1>
  </div>
  </div>
);

export default RouteLoad;
