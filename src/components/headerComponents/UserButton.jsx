import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserButton({ mdScreen }) {
  const [onHoverColorUser, setOnHoverColorUser] = useState('black');

  function changeOnHoverColor(setColorFunction, newColor) {
    setColorFunction(newColor);
  }
  return (
    <div className="relative ml-1 flex items-center duration-200 hover:scale-110">
      <NavLink to={'/user'}>
        <svg
          onMouseEnter={() => {
            if (!mdScreen) {
              changeOnHoverColor(setOnHoverColorUser, '#0156FF');
            }
          }}
          onMouseLeave={() => {
            if (!mdScreen) {
              changeOnHoverColor(setOnHoverColorUser, 'black');
            }
          }}
          width="25"
          height="25"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="15"
            stroke={mdScreen ? 'white' : onHoverColorUser}
            fill={mdScreen ? '#0156FF' : 'white'}
            strokeWidth="2.2"
          />
          <path
            d="M16 10C16.7956 10 17.5587 10.3161 18.1213 10.8787C18.6839 11.4413 19 12.2044 19 13C19 13.7956 18.6839 14.5587 18.1213 15.1213C17.5587 15.6839 16.7956 16 16 16C15.2044 16 14.4413 15.6839 13.8787 15.1213C13.3161 14.5587 13 13.7956 13 13C13 12.2044 13.3161 11.4413 13.8787 10.8787C14.4413 10.3161 15.2044 10 16 10ZM16 17.5C19.315 17.5 22 18.8425 22 20.5V22H10V20.5C10 18.8425 12.685 17.5 16 17.5Z"
            fill={mdScreen ? 'white' : onHoverColorUser}
          />
        </svg>
      </NavLink>
    </div>
  );
}
UserButton.propTypes = {
  mdScreen: PropTypes.bool.isRequired,
};
export default UserButton;
