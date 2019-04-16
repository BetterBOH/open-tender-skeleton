import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`star-${uniqueAriaId}`}
  >
    <desc id={`star-${uniqueAriaId}`}>{alt || 'Star'}</desc>
    <defs>
      <path
        id="star-a"
        d="M12.104381,2.55737608 C12.4712164,1.81420797 13.5309603,1.81420797 13.8977957,2.55737608 L16.7553497,8.3464661 L23.1457165,9.28051393 C23.9656312,9.40035674 24.2924147,10.408198 23.6988211,10.9863581 L19.0756101,15.4893656 L20.166697,21.8509567 C20.3068155,22.6679189 19.4492666,23.2908819 18.7156371,22.9050735 L13.0010883,19.8998497 L7.28653961,22.9050735 C6.55291004,23.2908819 5.69536119,22.6679189 5.83547972,21.8509567 L6.92656655,15.4893656 L2.30335554,10.9863581 C1.70976201,10.408198 2.03654545,9.40035674 2.85646012,9.28051393 L9.24682697,8.3464661 L12.104381,2.55737608 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="star-b" fill="#fff">
        <use xlinkHref="#star-a" />
      </mask>
      <g fill={fill} mask="url(#star-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
