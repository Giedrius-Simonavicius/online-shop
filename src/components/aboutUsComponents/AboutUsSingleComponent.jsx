import React from 'react';
import { useGeneralCtx } from '../../context/GeneralProvider';

function AboutUsSingleComponent({
  theme,
  icon,
  title,
  text1,
  text2,
  imgSrc,
  imgSrcSm,
}) {
  const { mdScreen, smScreen } = useGeneralCtx();
  return (
    <div
      className={`items-center p-5 ${
        smScreen ? 'flex flex-col-reverse' : 'flex'
      }  ${theme} `}
    >
      <div
        className={`${
          smScreen ? 'w-full' : 'w-1/3 lg:w-1/2'
        }mx-auto flex  flex-col  gap-10`}
      >
        <div className={`${mdScreen ? '' : 'flex'} items-start gap-6`}>
          {icon && (
            <img
              loading="lazy"
              className={`${mdScreen ? 'w-8' : ''}`}
              src={icon}
              alt={title}
            />
          )}
          <h2 className="text-4xl font-[500] sm:text-sm md:mt-2 md:text-base lg:text-2xl">
            {title}
          </h2>
        </div>
        <p className="font-light md:text-sm">{text1}</p>
        {text2 && <p className="font-light md:text-sm">{text2}</p>}
      </div>
      <div
        className={`${
          smScreen ? 'flex justify-center sm:w-full sm:min-w-[90vw]' : 'mx-auto'
        } object-contain py-20 sm:w-4/5  lg:w-1/2`}
      >
        <img
          loading="lazy"
          className="border-none"
          src={smScreen ? imgSrcSm || imgSrc : imgSrc}
          alt={title}
        />
      </div>
    </div>
  );
}

export default AboutUsSingleComponent;
