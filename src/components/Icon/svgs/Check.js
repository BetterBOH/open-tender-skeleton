import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`check-${uniqueAriaId}`}
  >
    <desc id={`check-${uniqueAriaId}`}>{alt || 'Check'}</desc>
    <defs>
      <path
        id={`check-a-${uniqueAriaId}`}
        d="M20.4393398,6.43933983 C21.0251263,5.85355339 21.9748737,5.85355339 22.5606602,6.43933983 C23.1464466,7.02512627 23.1464466,7.97487373 22.5606602,8.56066017 L11.5606602,19.5606602 C10.9748737,20.1464466 10.0251263,20.1464466 9.43933983,19.5606602 L4.43933983,14.5606602 C3.85355339,13.9748737 3.85355339,13.0251263 4.43933983,12.4393398 C5.02512627,11.8535534 5.97487373,11.8535534 6.56066017,12.4393398 L10.5,16.3786797 L20.4393398,6.43933983 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id={`check-b-${uniqueAriaId}`} fill="#fff">
        <use xlinkHref={`#check-a-${uniqueAriaId}`} />
      </mask>
      <g fill={fill} mask={`url(#check-b-${uniqueAriaId})`}>
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
