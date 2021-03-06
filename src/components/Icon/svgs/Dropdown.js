import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`dropdown-${uniqueAriaId}`}
  >
    <desc id={`dropdown-${uniqueAriaId}`}>{alt || 'Dropdown'}</desc>
    <defs>
      <path
        d="M15.2883529,0.482972446 L9,7.01685253 L2.71058824,0.482972446 C2.40141176,0.160624094 1.99482353,0 1.58823529,0 L1.58823529,0 C1.18164706,0 0.775058824,0.160624094 0.464823529,0.482972446 L0.464823529,0.482972446 C0.159882353,0.799819973 0.00529411765,1.21348202 0,1.62824424 L0,1.62824424 L0,1.67005051 C0.00529411765,2.08481272 0.159882353,2.49847477 0.464823529,2.8153223 L0.464823529,2.8153223 L7.87658824,10.5164775 C8.49705882,11.1611742 9.50294118,11.1611742 10.1234118,10.5164775 L10.1234118,10.5164775 L17.5351765,2.8153223 C17.8401176,2.49847477 17.9947059,2.08481272 18,1.67005051 L18,1.67005051 L18,1.62824424 C17.9947059,1.21348202 17.8401176,0.799819973 17.5351765,0.482972446 L17.5351765,0.482972446 C17.2238824,0.160624094 16.8183529,0 16.4117647,0 L16.4117647,0 C16.0051765,0 15.5985882,0.160624094 15.2883529,0.482972446 L15.2883529,0.482972446 Z"
        id={`dropdown-a-${uniqueAriaId}`}
      />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(4.000000, 8.000000)">
        <mask id={`dropdown-b-${uniqueAriaId}`} fill="#fff">
          <use xlinkHref={`#dropdown-a-${uniqueAriaId}`} />
        </mask>
        <polygon
          fill={fill}
          mask={`url(#dropdown-b-${uniqueAriaId})`}
          points="-11 26 27 26 27 -14 -11 -14"
        />
      </g>
    </g>
  </svg>
);
