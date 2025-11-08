import {
  artCurationServicesImg,
  brandingServicesImg,
  productionServicesImg,
} from '../assets';

export const services = [
  {
    img: productionServicesImg,
    title: 'Film Production',
    rotate: 'rotate-12',
    tape: '-top-15 -left-20 -rotate-10 md:-top-10 md:-left-15',
    url: '/services/film-production',
  },
  {
    img: brandingServicesImg,
    title: 'Branding',
    rotate: 'rotate-0 z-[2]',
    tape: '-top-16 md:-top-12 lg:-top-16',
    url: '/services/branding',
  },
  {
    img: artCurationServicesImg,
    title: 'Art Curation',
    rotate: '-rotate-12 -translate-x-20 md:translate-x-0',
    tape: '-top-18 scale-[-1] left-20 rotate-45 md:-top-8 md:left-16 lg:-top-15 xl:left-22',
    url: '/services/art-curation',
  },
];
