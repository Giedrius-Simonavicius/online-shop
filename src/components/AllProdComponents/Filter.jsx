import React from 'react';
import { customPcs, desktops, laptops, monitors } from '../../data/data';

function Filter() {
  return (
    <div className="mr-3 w-36">
      <h2 className="mb-3 font-bold">Category</h2>
      <div>
        <div className="flex justify-between">
          <p className="text-xs ">Custom PC's</p>
          <span className=" text-xs ">{customPcs.length - 1}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Laptops</p>
          <span className=" text-xs ">{laptops.length - 1}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Monitors</p>
          <span className=" text-xs ">{monitors.length - 1}</span>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Desktops</p>
          <span className=" text-xs ">{desktops.length - 1}</span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
