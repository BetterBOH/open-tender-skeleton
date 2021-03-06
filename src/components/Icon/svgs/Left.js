import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`left-${uniqueAriaId}`}
  >
    <desc id={`left-${uniqueAriaId}`}>{alt || 'Left'}</desc>
    <defs>
      <path
        id="left-a"
        d="M9.12132034,14.5 L12.5606602,17.9393398 C13.1464466,18.5251263 13.1464466,19.4748737 12.5606602,20.0606602 C11.9748737,20.6464466 11.0251263,20.6464466 10.4393398,20.0606602 L4.43933983,14.0606602 C3.85355339,13.4748737 3.85355339,12.5251263 4.43933983,11.9393398 L10.4393398,5.93933983 C11.0251263,5.35355339 11.9748737,5.35355339 12.5606602,5.93933983 C13.1464466,6.52512627 13.1464466,7.47487373 12.5606602,8.06066017 L9.12132034,11.5 L19.5,11.5 C20.3284271,11.5 21,12.1715729 21,13 C21,13.8284271 20.3284271,14.5 19.5,14.5 L9.12132034,14.5 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="left-b" fill="#fff">
        <use xlinkHref="#left-a" />
      </mask>
      <g fill={fill} mask="url(#left-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
