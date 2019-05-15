import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="10px"
    height="3px"
    viewBox="0 0 10 3"
    aria-labelledby={`minus-${uniqueAriaId}`}
  >
    <desc id={`minus-${uniqueAriaId}`}>{alt || 'Minus'}</desc>
    <g transform="translate(-15.000000, -19.000000)" stroke={fill}>
      <g transform="translate(16.000000, 9.000000)">
        <polygon points="0.444444444 12.3111111 7.55555556 12.3111111 8 12.3111111 8 11.4222222 7.55555556 11.4222222 0.444444444 11.4222222 0 11.4222222 0 12.3111111" />
      </g>
    </g>
  </svg>
);
