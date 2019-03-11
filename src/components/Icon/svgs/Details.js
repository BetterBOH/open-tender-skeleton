import React from 'react';

export default ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    enableBackground="new 0 0 26 26"
  >
    <defs>
      <filter
        id="Adobe_OpacityMaskFilter"
        filterUnits="userSpaceOnUse"
        x="-6.6"
        y="0"
        width="26"
        height="26"
      >
        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
      </filter>
    </defs>
    <mask
      maskUnits="userSpaceOnUse"
      x="-6.6"
      y="0"
      width="26"
      height="26"
      id="details-b"
    >
      <g filter="url(#Adobe_OpacityMaskFilter)">
        <path
          id="details-a"
          fill="#FFF"
          d="M9.3,7.1c-0.6-0.6-0.6-1.5,0-2.1s1.5-0.6,2.1,0l7,7c0.6,0.6,0.6,1.5,0,2.1l-7,7 c-0.6,0.6-1.5,0.6-2.1,0c-0.6-0.6-0.6-1.5,0-2.1l5.9-5.9L9.3,7.1z"
        />
      </g>
    </mask>
    <g mask="url(#details-b)">
      <rect x="-6.6" fill={fill} width="26" height="26" />
    </g>
  </svg>
);
