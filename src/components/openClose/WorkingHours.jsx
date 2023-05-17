import React from 'react';

function WorkingHours({ openClose }) {
  return (
    <div
      className={`${openClose}  ml-[6rem] bg-white p-2 mt-2 pt-3 pb-4 max-w-sm`}
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

      <div className="flex mt-2 border-t border-b pt-2 pb-2 border-gray-400">
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
          E-mail: <span className="text-color3">shop@email.com</span>
        </p>
      </div>
    </div>
  );
}

export default WorkingHours;
