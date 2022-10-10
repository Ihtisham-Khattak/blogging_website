import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const iconHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between mx-auto h-20  bg-[#937DC2]">
      <div className="max-w-[1280] w-full px-4 py-6">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Blog.</h1>
      </div>
      <ul className="hidden md:flex items-center z-10 ">
        {
          ['GREAT_MOVIES', 'COLLECTIONS', 'TV/STREAMING', 'INTERVIEWS', 'MOVIE_REVIEWS', 'CHAZS_JOURNAL', 'CONTRIBUTORS'].map((items) => (
            <li key={items.id} className='text-sm'>{items}</li>
          ))
        }
      </ul>

      <div
        className="md:hidden flex items-center py-6 text-[#FFE6F7] z-10"
        onClick={iconHandler}
      >
        {nav ? <GiCancel size={25} /> : <GiHamburgerMenu size={25} />}
      </div>

      <div
        onClick={iconHandler}
        className={
          nav
            ? "absolute left-0 top-[80px] w-full h-[20rem] flex items-center text-center justify-center bg-slate-400 z-10"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          {["Hero", "Disclamier", "End"].map((items) => (
            <li key={items.id}>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
