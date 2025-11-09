import {
  artBgIcon1,
  artBgIcon2,
  artBgIcon3,
  artBgIcon4,
  artCardImg,
} from '../assets';

const artServiceData = {
  heading: {
    text: '"V take art where it belongs, to the people.” - Vernita Verma',
    className: 'text-[3.2vw] md:w-[60vw] md:text-[2vw]',
  },
  card: {
    img: artCardImg,
    title: 'Art Curation',
  },
  body: {
    description: [
      'Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.',
      'Through every festival, every performance, and every gathering, we help stories find their stage and their people.',
    ],
    lists: {
      title: 'V curates:',
      points: [
        'Art Festivals',
        'Live Performances',
        'Community Events',
        'Cultural Storytelling',
      ],
    },
  },
  icons: [
    {
      src: artBgIcon1,
      className: 'absolute top-0 right-1/10',
    },
    {
      src: artBgIcon2,
      className: 'absolute top-1/2 right-1/6',
    },
    {
      src: artBgIcon3,
      className: 'absolute bottom-0 right-1/8',
    },
    {
      src: artBgIcon4,
      className: 'absolute bottom-1/7 left-1/10',
    },
  ],
};

export default artServiceData;
