import React from 'react';

export default ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26px"
    height="26px"
    viewBox="0 0 26 26"
  >
    <defs>
      <path
        id="user-a"
        d="M22.5,21.5 C22.5,22.3284271 21.8284271,23 21,23 L5,23 C4.17157288,23 3.5,22.3284271 3.5,21.5 L3.5,19.8333333 C3.5,17.0973009 6.01676113,15 9,15 L17,15 C19.9832389,15 22.5,17.0973009 22.5,19.8333333 L22.5,21.5 Z M13,14 C9.96243388,14 7.5,11.5375661 7.5,8.5 C7.5,5.46243388 9.96243388,3 13,3 C16.0375661,3 18.5,5.46243388 18.5,8.5 C18.5,11.5375661 16.0375661,14 13,14 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="user-b" fill="#fff">
        <use xlinkHref="#user-a" />
      </mask>
      <g fill={fill} mask="url(#user-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
