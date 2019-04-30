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
        d="M8.377,0.984 L0.965,8.685 C0.66,9.002 0.505,9.415 0.5,9.831 L0.5,9.831 L0.5,9.871 C0.505,10.287 0.66,10.7 0.965,11.018 L0.965,11.018 C1.276,11.34 1.681,11.5 2.088,11.5 L2.088,11.5 C2.495,11.5 2.902,11.34 3.212,11.018 L3.212,11.018 L9.5,4.483 L15.79,11.018 C16.098,11.34 16.505,11.5 16.911,11.5 L16.911,11.5 C17.318,11.5 17.724,11.34 18.035,11.018 L18.035,11.018 C18.34,10.7 18.494,10.287 18.5,9.871 L18.5,9.871 L18.5,9.831 C18.494,9.415 18.34,9.002 18.035,8.685 L18.035,8.685 L10.623,0.984 C10.313,0.661 9.907,0.5 9.5,0.5 L9.5,0.5 C9.093,0.5 8.687,0.661 8.377,0.984 L8.377,0.984 Z"
      />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(4.000000, 8.000000)">
        <mask id="dropup-b" fill="#fff">
          <use xlinkHref="#dropup-a" />
        </mask>
        <polygon
          fill={fill}
          mask="url(#dropup-b)"
          points="-11 26 27 26 27 -14 -11 -14"
        />
      </g>
    </g>
  </svg>
);
