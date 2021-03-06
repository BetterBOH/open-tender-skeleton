import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`flame-${uniqueAriaId}`}
  >
    <desc id={`flame-${uniqueAriaId}`}>{alt || 'Flame'}</desc>
    <defs>
      <path
        id="flame-a"
        d="M9.44117769,2.50000909 C9.66944784,2.52130356 14.3823554,3.9512803 14.3823554,7.72172408 C14.3823554,12.3823437 11.7559976,13.387989 12.5294137,14.8529263 C13.3028299,16.3178636 15.6176498,16.0882207 16.6785474,13.617636 C17.7394449,11.1470514 16.3500903,7.24689718 16.6785474,7.72172408 C19.5884038,11.9282955 20.5588275,12.6142178 20.5588275,15.035626 C20.5588275,19.7069254 16.9672807,23.4999727 12.5294137,23.4999727 C8.09154684,23.4999727 4.5,19.7069254 4.5,15.035626 C4.5,12.1771856 7.38180075,9.95149686 8.95637892,7.72172408 C10.5309571,5.4919513 9.35998586,2.492435 9.44117769,2.50000909 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flame-b" fill="#fff">
        <use xlinkHref="#flame-a" />
      </mask>
      <g fill={fill} mask="url(#flame-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
