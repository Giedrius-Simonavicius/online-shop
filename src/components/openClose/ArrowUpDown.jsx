import React from 'react';

function ArrowUpDown({ open }) {
  return (
    <div className="pb-2">
      {open ? (
        <img loading="lazy" src="/icons/ui/arrowUp.svg" alt="arrowUp" />
      ) : (
        <img loading="lazy" src="/icons/ui/arrowDownBc.svg" alt="arrowDown" />
      )}
    </div>
  );
}

export default ArrowUpDown;
