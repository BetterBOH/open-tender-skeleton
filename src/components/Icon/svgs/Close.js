import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`close-${uniqueAriaId}`}
  >
    <desc id={`close-${uniqueAriaId}`}>{alt || 'Close'}</desc>
    <defs>
      <path
        id={`close-a-${uniqueAriaId}`}
        d="M15.1213203,13 L20.0606602,17.9393398 C20.6464466,18.5251263 20.6464466,19.4748737 20.0606602,20.0606602 C19.4748737,20.6464466 18.5251263,20.6464466 17.9393398,20.0606602 L13,15.1213203 L8.06066017,20.0606602 C7.47487373,20.6464466 6.52512627,20.6464466 5.93933983,20.0606602 C5.35355339,19.4748737 5.35355339,18.5251263 5.93933983,17.9393398 L10.8786797,13 L5.93933983,8.06066017 C5.35355339,7.47487373 5.35355339,6.52512627 5.93933983,5.93933983 C6.52512627,5.35355339 7.47487373,5.35355339 8.06066017,5.93933983 L13,10.8786797 L17.9393398,5.93933983 C18.5251263,5.35355339 19.4748737,5.35355339 20.0606602,5.93933983 C20.6464466,6.52512627 20.6464466,7.47487373 20.0606602,8.06066017 L15.1213203,13 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id={`close-b-${uniqueAriaId}`} fill="#fff">
        <use xlinkHref={`#close-a-${uniqueAriaId}`} />
      </mask>
      <g fill={fill} mask={`url(#close-b-${uniqueAriaId})`}>
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
