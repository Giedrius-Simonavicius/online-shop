import React from 'react';

function AboutUsSingleComponent({ theme, icon, title, text1, text2, imgSrc }) {
  return (
    <div className={`flex items-center ${theme}`}>
      <div className="mx-auto flex w-1/3 flex-col gap-10 ">
        <div className="flex items-start gap-6">
          {icon && <img src={icon} alt={title} />}
          <h2 className="text-5xl font-[500]">{title}</h2>
        </div>
        <p className="font-light">{text1}</p>
        {text2 && <p className="font-light">{text2}</p>}
      </div>
      <div className="mx-auto object-contain py-20">
        <img className="border-none" src={imgSrc} alt={title} />
      </div>
    </div>
  );
}

export default AboutUsSingleComponent;
