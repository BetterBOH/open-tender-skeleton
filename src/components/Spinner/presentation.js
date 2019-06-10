import React from 'react';

const Spinner = React.memo(() => (
  <div className="Spinner col-12 h100 flex justify-center items-center">
    <div className="Spinner__icon" />
  </div>
));

export default Spinner;
