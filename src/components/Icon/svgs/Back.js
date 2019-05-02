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
      <path
        d="M9.83,0.5 C9.415,0.506 9.002,0.66 8.685,0.965 L8.685,0.965 L0.984,8.377 C0.339,8.997 0.339,10.003 0.984,10.623 L0.984,10.623 L8.685,18.035 C9.002,18.34 9.415,18.495 9.83,18.5 L9.83,18.5 L9.871,18.5 C10.287,18.495 10.7,18.34 11.018,18.035 L11.018,18.035 C11.34,17.724 11.5,17.319 11.5,16.912 L11.5,16.912 C11.5,16.505 11.34,16.098 11.018,15.788 L11.018,15.788 L4.483,9.5 L11.018,3.21 C11.34,2.902 11.5,2.495 11.5,2.089 L11.5,2.089 C11.5,1.682 11.34,1.275 11.018,0.965 L11.018,0.965 C10.7,0.66 10.287,0.506 9.871,0.5 L9.871,0.5 L9.83,0.5 Z"
        id="back-a"
      />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(8.000000, 4.000000)">
        <mask id="back-b" fill="#fff">
          <use xlinkHref="#back-a" />
        </mask>
        <polygon
          fill={fill}
          mask="url(#back-b)"
          points="-19 35 29 35 29 -15 -19 -15"
        />
      </g>
    </g>
  </svg>
);
