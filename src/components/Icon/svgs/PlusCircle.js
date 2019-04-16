import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    width="26px"
    height="26px"
    viewBox="0 0 26 26"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
    aria-labelledby={`plus-circle-${uniqueAriaId}`}
  >
    <desc id={`plus-circle-${uniqueAriaId}`}>{alt || 'Plus Circle'}</desc>
    <defs>
      <path
        d="M8.92307692,7.07692308 L12.3076923,7.07692308 C12.8174936,7.07692308 13.2307692,7.49019869 13.2307692,8 C13.2307692,8.50980131 12.8174936,8.92307692 12.3076923,8.92307692 L8.92307692,8.92307692 L8.92307692,12.3076923 C8.92307692,12.8174936 8.50980131,13.2307692 8,13.2307692 C7.49019869,13.2307692 7.07692308,12.8174936 7.07692308,12.3076923 L7.07692308,8.92307692 L3.69230769,8.92307692 C3.18250638,8.92307692 2.76923077,8.50980131 2.76923077,8 C2.76923077,7.49019869 3.18250638,7.07692308 3.69230769,7.07692308 L7.07692308,7.07692308 L7.07692308,3.69230769 C7.07692308,3.18250638 7.49019869,2.76923077 8,2.76923077 C8.50980131,2.76923077 8.92307692,3.18250638 8.92307692,3.69230769 L8.92307692,7.07692308 Z"
        id="path-1"
      />
    </defs>
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="add-a" transform="translate(-255.000000, -15.000000)">
        <g id="add" transform="translate(256.000000, 16.000000)">
          <path
            d="M12,24 C15.8424493,24 19.2630913,22.1940288 21.4594145,19.3845981 C23.0512869,17.3483517 24,14.7849677 24,12 C24,5.372583 18.627417,0 12,0 C5.372583,0 0,5.372583 0,12 C0,18.627417 5.372583,24 12,24 Z"
            id="Oval-2"
            stroke={fill}
            strokeWidth="2"
          />
          <g id="Icons/PlusCircle" transform="translate(4.000000, 4.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1" />
            </mask>
            <g id="add-b" mask="url(#mask-2)" fill={fill} fillRule="evenodd">
              <rect id="Color" x="0" y="0" width="16" height="16" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
