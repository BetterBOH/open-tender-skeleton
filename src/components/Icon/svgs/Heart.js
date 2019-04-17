import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`heart-${uniqueAriaId}`}
  >
    <desc id={`heart-${uniqueAriaId}`}>{alt || 'Heart'}</desc>
    <defs>
      <path
        id="heart-a"
        d="M24,9.90182572 C24,11.6262616 23.341782,13.2800244 22.1703881,14.4989325 L14.3581913,22.6318257 C13.6079411,23.4128743 12.3915451,23.4128743 11.6412948,22.6318257 L3.82909808,14.4989325 C1.39030062,11.9600205 1.39030065,7.84363094 3.82909814,5.30471899 C6.26789564,2.76580705 10.2219676,2.76580702 12.6607652,5.30471894 L12.9997431,5.65761217 L13.3385616,5.30488492 C14.5095651,4.08523847 16.0981167,3.4000001 17.7545545,3.4000001 C19.4109172,3.4000001 20.9993999,4.0851763 22.1703881,5.30471892 C23.3418417,6.5237771 24,8.1774681 24,9.90182572 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="heart-b" fill="#fff">
        <use xlinkHref="#heart-a" />
      </mask>
      <g fill={fill} mask="url(#heart-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
