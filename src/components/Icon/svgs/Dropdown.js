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
        id="dropdown-a"
        d="M15.9393398,10.4393398 C16.5251263,9.85355339 17.4748737,9.85355339 18.0606602,10.4393398 C18.6464466,11.0251263 18.6464466,11.9748737 18.0606602,12.5606602 L14.0606602,16.5606602 C13.4748737,17.1464466 12.5251263,17.1464466 11.9393398,16.5606602 L7.93933983,12.5606602 C7.35355339,11.9748737 7.35355339,11.0251263 7.93933983,10.4393398 C8.52512627,9.85355339 9.47487373,9.85355339 10.0606602,10.4393398 L13,13.3786797 L15.9393398,10.4393398 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="dropdown-b" fill="#fff">
        <use xlinkHref="#dropdown-a" />
      </mask>
      <g fill={fill} mask="url(#dropdown-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
