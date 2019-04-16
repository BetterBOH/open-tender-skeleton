import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    enableBackground="new 0 0 26 26"
    aria-labelledby={`back-${uniqueAriaId}`}
  >
    <desc id={`back-${uniqueAriaId}`}>{alt || 'Back'}</desc>
    <defs>
      <filter
        id="Adobe_OpacityMaskFilter"
        filterUnits="userSpaceOnUse"
        x="6"
        y="0"
        width="26"
        height="26"
      >
        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
      </filter>
    </defs>
    <mask
      maskUnits="userSpaceOnUse"
      x="6"
      y="0"
      width="26"
      height="26"
      id="back-b"
    >
      <g filter="url(#Adobe_OpacityMaskFilter)">
        <path
          id="back-a"
          fill="#FFF"
          d="M16.6,7.6l-5.9,5.9l5.9,5.9c0.6,0.6,0.6,1.5,0,2.1c-0.6,0.6-1.5,0.6-2.1,0l-7-7 c-0.6-0.6-0.6-1.5,0-2.1l7-7c0.6-0.6,1.5-0.6,2.1,0C17.1,6,17.1,7,16.6,7.6z"
        />
      </g>
    </mask>
    <g mask="url(#back-b)">
      <rect x="6" fill={fill} width="26" height="26" />
    </g>
  </svg>
);
