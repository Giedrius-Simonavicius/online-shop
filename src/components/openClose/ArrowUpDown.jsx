import React from 'react';
import PropTypes from 'prop-types';
function ArrowUpDown({ open, wh }) {
  return (
    <div className="pb-2">
      {open ? (
        wh ? (
          <img loading="lazy" src="/icons/ui/arrowUpWh.svg" alt="arrowUp" />
        ) : (
          <img loading="lazy" src="/icons/ui/arrowUp.svg" alt="arrowUp" />
        )
      ) : wh ? (
        <img loading="lazy" src="/icons/ui/arrowDownWh.svg" alt="arrowDown" />
      ) : (
        <img loading="lazy" src="/icons/ui/arrowDownBc.svg" alt="arrowDown" />
      )}
    </div>
  );
}
ArrowUpDown.propTypes = {
  open: PropTypes.bool,
  wh: PropTypes.bool,
};
export default ArrowUpDown;
