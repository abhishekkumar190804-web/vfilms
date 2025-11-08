import React from 'react';
import { closeIcon, logo, mailIcon, menuIcon } from '../assets';
import { useLocation, useNavigate } from 'react-router';
import Button from './ui/button';

const Navbar = () => {
  const [IsActive, setIsActive] = React.useState(false);
  const { pathname } = useLocation();
  const isHome = React.useMemo(() => pathname === '/', [pathname]);
  const navigate = useNavigate();
  const handleClick = (dir) => {
    setIsActive(false)
    navigate(dir)
  }

  return (
    <header
      className={`
        fixed rounded-s-full m-4 w-full h-14 px-6 z-20
        flex items-center ${isHome ? 'justify-end' : 'justify-between'}
        motion-safe:transition-all motion-reduce:transition-none
        motion-safe:duration-600 motion-reduce:duration-[0ms]
        bg-[#FFFBFB59]
        ${IsActive && 'md:backdrop-blur-sm'}
      `}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="VFilms"
        className={`h-10 select-none cursor-pointer motion-safe:transition-opacity motion-reduce:transition-none motion-safe:duration-300 motion-reduce:duration-[0ms] ${
          !isHome ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => handleClick('/')}
      />

      {/* Menu Button */}
      <button
        className={`
          cursor-pointer select-none
          motion-safe:transition-opacity motion-reduce:transition-none
           motion-safe:duration-200 motion-reduce:duration-[0ms]
          ${IsActive ? 'opacity-0' : 'opacity-100'}
        `}
        onClick={() => setIsActive(true)}
      >
        <img src={menuIcon} alt="menu" />
      </button>

      {/* Navigation Menu */}
      <ul
        className={`
          absolute right-0 -top-4 p-16 px-6
          flex flex-col-reverse gap-6 items-center justify-end
          font-[Instrument_Sans]
          h-screen w-full
          transition-transform duration-500
          backdrop-blur-sm

          md:bg-transparent
          md:flex-row md:py-0 md:top-auto md:w-auto md:h-auto
          md:backdrop-blur-none
          ${IsActive ? 'translate-x-0' : 'translate-x-full z-30'}
        `}
      >
        <li
          className="cursor-pointer select-none"
          onClick={() => handleClick('/')}
        >
          Services
        </li>
        <li
          className="cursor-pointer select-none"
          onClick={() => handleClick('teams')}
        >
          Their Stories
        </li>
        <li
          className="cursor-pointer select-none"
          onClick={() => handleClick('/about')}
        >
          Our Story
        </li>
        <li
          className="cursor-pointer select-none"
          onClick={() => handleClick('/')}
        >
          Varnan
        </li>

        <li>
          <Button className="flex gap-2 items-center">
            Let’s Talk
            <img src={mailIcon} alt="mailIcon" className="w-5 h-4" />
          </Button>
        </li>

        <li>
          <button
            className="
              cursor-pointer select-none z-30
              absolute top-8 right-6
              md:static md:top-auto md:right-auto
            "
            onClick={() => setIsActive(false)}
          >
            <img src={closeIcon} alt="close" />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
