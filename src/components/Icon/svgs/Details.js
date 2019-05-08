import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    enableBackground="new 0 0 26 26"
    aria-labelledby={`details-${uniqueAriaId}`}
  >
    <desc id={`details-${uniqueAriaId}`}>{alt || 'Details'}</desc>
    <defs>
      <path
        d="M2.128,0.5 C1.713,0.505 1.3,0.66 0.982,0.965 L0.982,0.965 C0.661,1.276 0.5,1.681 0.5,2.088 L0.5,2.088 C0.5,2.495 0.661,2.902 0.982,3.212 L0.982,3.212 L7.517,9.5 L0.982,15.79 C0.661,16.097 0.5,16.505 0.5,16.911 L0.5,16.911 C0.5,17.319 0.661,17.724 0.982,18.035 L0.982,18.035 C1.3,18.34 1.713,18.494 2.128,18.5 L2.128,18.5 L2.169,18.5 C2.585,18.494 2.998,18.34 3.315,18.035 L3.315,18.035 L11.016,10.623 C11.339,10.314 11.5,9.907 11.5,9.5 L11.5,9.5 C11.5,9.093 11.339,8.687 11.016,8.377 L11.016,8.377 L3.315,0.965 C2.998,0.66 2.585,0.505 2.169,0.5 L2.169,0.5 L2.128,0.5 Z"
        id={`details-a-${uniqueAriaId}`}
      />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(8.000000, 4.000000)">
        <mask id={`details-b-${uniqueAriaId}`} fill="#fff">
          <use xlinkHref={`#details-a-${uniqueAriaId}`} />
        </mask>
        <polygon
          fill={fill}
          mask={`url(#details-b-${uniqueAriaId})`}
          points="-27 44 41 44 41 -26 -27 -26"
        />
      </g>
    </g>
  </svg>
);
