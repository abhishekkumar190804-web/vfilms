import {
  brandingBgIcon1,
  brandingBgIcon2,
  brandingBgIcon3,
  brandingBgIcon4,
  brandingCardImg,
} from '../assets';

const brandingServiceData = {
  heading: {
    text: 'A brand is a voice, and a product is a souvenir." - Lisa Gansky',
    className: 'text-[3.2vw] md:w-[60vw] md:text-[2vw]',
  },
  card: {
    img: brandingCardImg,
    title: 'Branding',
  },
  body: {
    description: [
      'A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.',
      'We shape brands that people remember, return to, and fall in love with.',
    ],
    lists: {
      title: 'V creates:',
      points: [
        'Branding & Communication',
        'Market Mapping',
        'Content Management',
        'Social Media Management',
        'Rebranding',
      ],
    },
  },
  icons: [
    {
      src: brandingBgIcon1,
      className: 'absolute top-0 right-1/10',
    },
    {
      src: brandingBgIcon2,
      className: 'absolute top-1/2 right-1/6',
    },
    {
      src: brandingBgIcon3,
      className: 'absolute bottom-0 right-1/8',
    },
    {
      src: brandingBgIcon4,
      className: 'absolute bottom-1/7 left-1/10',
    },
  ],
};

export default brandingServiceData;
