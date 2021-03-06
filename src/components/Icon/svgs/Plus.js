import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="10px"
    height="10px"
    viewBox="0 0 10 10"
    aria-labelledby={`plus-${uniqueAriaId}`}
  >
    <desc id={`plus-${uniqueAriaId}`}>{alt || 'Plus'}</desc>
    <g
      id={`plus-b-${uniqueAriaId}`}
      transform="translate(-63.000000, -16.000000)"
      stroke={fill}
    >
      <g
        id={`plus-a-${uniqueAriaId}`}
        transform="translate(16.000000, 9.000000)"
      >
        <path d="M52.4444444,11.4222222 L55.5555556,11.4222222 L56,11.4222222 L56,12.3111111 L55.5555556,12.3111111 L52.4444444,12.3111111 L52.4444444,15.5555556 L52.4444444,16 L51.5555556,16 L51.5555556,15.5555556 L51.5555556,12.3111111 L48.4444444,12.3111111 L48,12.3111111 L48,11.4222222 L48.4444444,11.4222222 L51.5555556,11.4222222 L51.5555556,8.44444444 L51.5555556,8 L52.4444444,8 L52.4444444,8.44444444 L52.4444444,11.4222222 Z" />
      </g>
    </g>
  </svg>
);
