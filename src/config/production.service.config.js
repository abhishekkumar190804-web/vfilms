import {
  productionBgIcon1,
  productionBgIcon2,
  productionBgIcon3,
  productionBgIcon4,
  productionCardImg,
} from '../assets';

const productionServiceData = {
  heading: {
    text: '"Filmmaking is a chance to live many lifetimes." - Robert Altman',
    className: 'text-[3vw] md:w-[60vw] md:text-[2vw]',
  },
  card: {
    img: productionCardImg,
    title: 'Film Production',
  },
  body: {
    description: [
      'Who says films are just an escape?',
      'We see them as a way to live many lives - to feel, to explore, and to tell stories that stay.',
      'And with each film, we carry new memories and new reasons to keep creating.',
    ],
    lists: {
      title: 'V crafts:',
      points: [
        'Documentaries',
        'Corporate Videos',
        '2D Animation Videos',
        '3D Animation Videos',
      ],
    },
  },
  icons: [
    {
      src: productionBgIcon1,
      className: 'absolute top-0 right-1/10',
    },
    {
      src: productionBgIcon2,
      className: 'absolute top-1/2 right-1/6',
    },
    {
      src: productionBgIcon3,
      className: 'absolute bottom-0 right-1/8',
    },
    {
      src: productionBgIcon4,
      className: 'absolute bottom-1/7 left-1/10',
    },
  ],
};

export default productionServiceData;
