import React from 'react';

function WorkingHours() {
  return (
    <div
      className={` z-2 ml-[2rem] mt-2 max-w-sm rounded-md border-2 border-color7 bg-color1 p-2 pb-4 pt-3`}
    >
      <div className="flex">
        <div className="mr-2 ">
          <img src="../../../public/icons/time.svg" alt="time" />
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
          <img src="../../../public/icons/location.svg" alt="location" />
        </div>
        <p className="mt-1">Address: 1234 Street Adress, City Address, 1234</p>
      </div>
      <div className="ml-2 mt-2">
        <p>
          Phones: <span className="text-color3">(00) 1234 5678</span>
        </p>
        <p>
          E-mail:{' '}
          <a
            className="mt-1 text-xs  text-color3"
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
