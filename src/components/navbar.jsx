import React from 'react';
import { closeIcon, logo, mailIcon, menuIcon } from '../assets';
import { useLocation, useNavigate } from 'react-router';

const Navbar = () => {
  const [IsActive, setIsActive] = React.useState(false);
  const { pathname } = useLocation();
  const isHome = React.useMemo(() => pathname === '/', [pathname]);
  const navigate = useNavigate();

  return (
    <header
      className={`
        fixed mt-4 w-full h-14 px-6 z-20
        flex items-center ${isHome ? 'justify-end' : 'justify-between'}
        bg-[#FFFBFB59]
      `}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="VFilms"
        className={`h-10 select-none cursor-pointer motion-safe:transition-opacity motion-reduce:transition-none motion-safe:duration-500 motion-reduce:duration-[0ms] ${!isHome?"opacity-100":"opacity-0"}`}
        onClick={() => navigate('/')}
      />

      {/* Menu Button */}
      <button
        className={`
          cursor-pointer select-none
          transition-opacity duration-600
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
          bg-[#f15c2b28]
          
          md:bg-transparent
          md:flex-row md:py-0 md:top-auto md:w-auto md:h-auto
          md:backdrop-blur-none
          
          ${IsActive ? 'translate-x-0' : 'translate-x-full z-30'}
        `}
      >
        <li
          className="cursor-pointer select-none"
          onClick={() => navigate('/')}
        >
          Services
        </li>
        <li
          className="cursor-pointer select-none"
          onClick={() => navigate('teams')}
        >
          Their Stories
        </li>
        <li
          className="cursor-pointer select-none"
          onClick={() => navigate('/about')}
        >
          Our Story
        </li>
        <li
          className="cursor-pointer select-none"
          onClick={() => navigate('/')}
        >
          Varnan
        </li>

        <li>
          <button
            className="
              bg-[#F15D2B] text-[#FFFFFF]
              rounded-3xl flex gap-2 items-center
              px-4 py-3
              shadow-[0_4px_12px_0_#00000033]
              cursor-pointer
            "
          >
            Let’s Talk
            <img src={mailIcon} alt="mailIcon" className="w-5 h-4" />
          </button>
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
