import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomeButton({ mdScreen }) {
  return (
    <NavLink
      title="Click to go to home page"
      to={'/'}
      className={`${
        mdScreen
          ? '-mt-4 mb-8 h-5'
          : 'duration-[1000ms] hover:rotate-[360deg] hover:scale-150'
      } `}
    >
      <span className="sr-only">Home page</span>
      <svg
        width="85"
        height="69"
        viewBox="0 0 85 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.0331 13.9454L25.2969 23.8637V36.0708L42.0331 45.9891L55.4588 38.3596V41.9836L42.0331 49.9946L25.2969 39.8855V44.2725L42.0331 54L58.7693 44.2725V32.0653L45.3435 39.8855V36.0708L58.7693 28.0599V23.8637L42.0331 13.9454Z"
          fill={mdScreen ? 'white' : `#0156FF`}
        />
      </svg>
    </NavLink>
  );
}
HomeButton.propTypes = {
  mdScreen: PropTypes.bool.isRequired,
};
export default HomeButton;
