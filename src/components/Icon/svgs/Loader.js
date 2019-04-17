import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`loader-${uniqueAriaId}`}
  >
    <desc id={`loader-${uniqueAriaId}`}>{alt || 'Loader'}</desc>
    <defs>
      <path
        id="loader-a"
        d="M11.5,3 C11.5,2.17157288 12.1715729,1.5 13,1.5 C13.8284271,1.5 14.5,2.17157288 14.5,3 L14.5,7 C14.5,7.82842712 13.8284271,8.5 13,8.5 C12.1715729,8.5 11.5,7.82842712 11.5,7 L11.5,3 Z M11.5,19 C11.5,18.1715729 12.1715729,17.5 13,17.5 C13.8284271,17.5 14.5,18.1715729 14.5,19 L14.5,23 C14.5,23.8284271 13.8284271,24.5 13,24.5 C12.1715729,24.5 11.5,23.8284271 11.5,23 L11.5,19 Z M4.86933983,6.99066017 C4.28355339,6.40487373 4.28355339,5.45512627 4.86933983,4.86933983 C5.45512627,4.28355339 6.40487373,4.28355339 6.99066017,4.86933983 L9.82066017,7.69933983 C10.4064466,8.28512627 10.4064466,9.23487373 9.82066017,9.82066017 C9.23487373,10.4064466 8.28512627,10.4064466 7.69933983,9.82066017 L4.86933983,6.99066017 Z M16.1793398,18.3006602 C15.5935534,17.7148737 15.5935534,16.7651263 16.1793398,16.1793398 C16.7651263,15.5935534 17.7148737,15.5935534 18.3006602,16.1793398 L21.1306602,19.0093398 C21.7164466,19.5951263 21.7164466,20.5448737 21.1306602,21.1306602 C20.5448737,21.7164466 19.5951263,21.7164466 19.0093398,21.1306602 L16.1793398,18.3006602 Z M3,14.5 C2.17157288,14.5 1.5,13.8284271 1.5,13 C1.5,12.1715729 2.17157288,11.5 3,11.5 L7,11.5 C7.82842712,11.5 8.5,12.1715729 8.5,13 C8.5,13.8284271 7.82842712,14.5 7,14.5 L3,14.5 Z M19,14.5 C18.1715729,14.5 17.5,13.8284271 17.5,13 C17.5,12.1715729 18.1715729,11.5 19,11.5 L23,11.5 C23.8284271,11.5 24.5,12.1715729 24.5,13 C24.5,13.8284271 23.8284271,14.5 23,14.5 L19,14.5 Z M6.99066017,21.1306602 C6.40487373,21.7164466 5.45512627,21.7164466 4.86933983,21.1306602 C4.28355339,20.5448737 4.28355339,19.5951263 4.86933983,19.0093398 L7.69933983,16.1793398 C8.28512627,15.5935534 9.23487373,15.5935534 9.82066017,16.1793398 C10.4064466,16.7651263 10.4064466,17.7148737 9.82066017,18.3006602 L6.99066017,21.1306602 Z M18.3006602,9.82066017 C17.7148737,10.4064466 16.7651263,10.4064466 16.1793398,9.82066017 C15.5935534,9.23487373 15.5935534,8.28512627 16.1793398,7.69933983 L19.0093398,4.86933983 C19.5951263,4.28355339 20.5448737,4.28355339 21.1306602,4.86933983 C21.7164466,5.45512627 21.7164466,6.40487373 21.1306602,6.99066017 L18.3006602,9.82066017 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="loader-b" fill="#fff">
        <use xlinkHref="#loader-a" />
      </mask>
      <g fill={fill} mask="url(#loader-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
