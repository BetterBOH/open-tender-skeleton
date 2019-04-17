import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`dropup-${uniqueAriaId}`}
  >
    <desc id={`dropup-${uniqueAriaId}`}>{alt || 'Dropup'}</desc>
    <defs>
      <path
        id="dropup-a"
        d="M15.9393398,16.5606602 L13,13.6213203 L10.0606602,16.5606602 C9.47487373,17.1464466 8.52512627,17.1464466 7.93933983,16.5606602 C7.35355339,15.9748737 7.35355339,15.0251263 7.93933983,14.4393398 L11.9393398,10.4393398 C12.5251263,9.85355339 13.4748737,9.85355339 14.0606602,10.4393398 L18.0606602,14.4393398 C18.6464466,15.0251263 18.6464466,15.9748737 18.0606602,16.5606602 C17.4748737,17.1464466 16.5251263,17.1464466 15.9393398,16.5606602 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="dropup-b" fill="#fff">
        <use xlinkHref="#dropup-a" />
      </mask>
      <g fill={fill} mask="url(#dropup-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
