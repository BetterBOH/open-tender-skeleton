import React from 'react';

export default ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
  >
    <defs>
      <path
        id="details-a"
        d="M15.9393398,7.06066017 C15.3535534,6.47487373 15.3535534,5.52512627 15.9393398,4.93933983 C16.5251263,4.35355339 17.4748737,4.35355339 18.0606602,4.93933983 L25.0606602,11.9393398 C25.6464466,12.5251263 25.6464466,13.4748737 25.0606602,14.0606602 L18.0606602,21.0606602 C17.4748737,21.6464466 16.5251263,21.6464466 15.9393398,21.0606602 C15.3535534,20.4748737 15.3535534,19.5251263 15.9393398,18.9393398 L21.8786797,13 L15.9393398,7.06066017 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="details-b" fill="#fff">
        <use xlinkHref="#details-a" />
      </mask>
      <g fill={fill} mask="url(#details-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
