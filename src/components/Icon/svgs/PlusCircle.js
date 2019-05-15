import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
    aria-labelledby={`plus-circle-${uniqueAriaId}`}
  >
    <desc id={`plus-circle-${uniqueAriaId}`}>{alt || 'Plus Circle'}</desc>
    <defs>
      <path
        id={`plus-circle-a-${uniqueAriaId}`}
        d="M8.92307692,7.07692308 L12.3076923,7.07692308 C12.8174936,7.07692308 13.2307692,7.49019869 13.2307692,8 C13.2307692,8.50980131 12.8174936,8.92307692 12.3076923,8.92307692 L8.92307692,8.92307692 L8.92307692,12.3076923 C8.92307692,12.8174936 8.50980131,13.2307692 8,13.2307692 C7.49019869,13.2307692 7.07692308,12.8174936 7.07692308,12.3076923 L7.07692308,8.92307692 L3.69230769,8.92307692 C3.18250638,8.92307692 2.76923077,8.50980131 2.76923077,8 C2.76923077,7.49019869 3.18250638,7.07692308 3.69230769,7.07692308 L7.07692308,7.07692308 L7.07692308,3.69230769 C7.07692308,3.18250638 7.49019869,2.76923077 8,2.76923077 C8.50980131,2.76923077 8.92307692,3.18250638 8.92307692,3.69230769 L8.92307692,7.07692308 Z"
      />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(1.000000, 1.000000)">
        <circle
          id={`circle-${uniqueAriaId}`}
          stroke={fill}
          strokeWidth="2"
          cx="12"
          cy="12"
          r="12"
        />
        <g
          id={`plus-${uniqueAriaId}`}
          transform="translate(4.000000, 4.000000)"
        >
          <mask id={`plus-circle-b-${uniqueAriaId}`} fill="#fff">
            <use xlinkHref={`#plus-circle-a-${uniqueAriaId}`} />
          </mask>
          <g fill={fill} mask={`url(#plus-circle-b-${uniqueAriaId})`}>
            <rect width="16" height="16" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
