import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`right-${uniqueAriaId}`}
  >
    <desc id={`right-${uniqueAriaId}`}>{alt || 'Right'}</desc>
    <defs>
      <path
        id="right-a"
        d="M16.8786797,14.5 L6.5,14.5 C5.67157288,14.5 5,13.8284271 5,13 C5,12.1715729 5.67157288,11.5 6.5,11.5 L16.8786797,11.5 L13.4393398,8.06066017 C12.8535534,7.47487373 12.8535534,6.52512627 13.4393398,5.93933983 C14.0251263,5.35355339 14.9748737,5.35355339 15.5606602,5.93933983 L21.5606602,11.9393398 C22.1464466,12.5251263 22.1464466,13.4748737 21.5606602,14.0606602 L15.5606602,20.0606602 C14.9748737,20.6464466 14.0251263,20.6464466 13.4393398,20.0606602 C12.8535534,19.4748737 12.8535534,18.5251263 13.4393398,17.9393398 L16.8786797,14.5 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="right-b" fill="#fff">
        <use xlinkHref="#right-a" />
      </mask>
      <g fill={fill} mask="url(#right-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
