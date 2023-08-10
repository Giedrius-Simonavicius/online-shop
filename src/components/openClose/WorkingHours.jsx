import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function WorkingHours() {
  return (
    <div
      className={` ml-[2rem] mt-2 max-w-sm rounded-md border-2 border-color7 bg-color1 p-2 pb-4 pt-3`}
    >
      <div className="flex">
        <div className="mr-2 ">
          <img loading="lazy" src="/icons/time.svg" alt="time" />
        </div>
        <div>
          <p>We are open:</p>
          <p>
            <span className="text-color5">Mon-Thu:</span> 9:00 AM - 5:30 PM
          </p>
          <p>
            <span className="text-color5">Fr:</span> 9:00 AM - 6:00 PM
          </p>
          <p>
            <span className="text-color5">Sat:</span> 11:00 AM - 5:00 PM
          </p>
        </div>
      </div>

      <div className="mt-2 flex border-b border-t border-gray-400 pb-2 pt-2">
        <div className="mr-2">
          <img loading="lazy" src="/icons/location.svg" alt="location" />
        </div>
        <div className="flex flex-col">
          <p className="mt-1">
            Address: 1234 Street Adress, City Address, 1234
          </p>
          <NavLink
            className="mt-1 text-color3 duration-200 hover:text-color4"
            to="https://goo.gl/maps/7iSgYiTbVuwcvsw48"
          >
            Google maps
          </NavLink>
        </div>
      </div>
      <div className="ml-2 mt-2">
        <p>
          Phones:{' '}
          <Link
            to="tel:0012345678"
            className="text-color3 duration-200 hover:text-color4"
          >
            (00) 1234 5678
          </Link>
        </p>
        <p>
          E-mail:{' '}
          <a
            className="mt-1 text-xs text-color3 duration-200 hover:text-color4"
            href="mailto:example@example.com"
          >
            shop@email.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default WorkingHours;
