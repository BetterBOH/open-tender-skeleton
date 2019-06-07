import React from 'react';

const Spinner = React.memo(() => (
  <div className="Spinner__container col-12 h100 flex justify-center items-center">
    <div className="Spinner" />
  </div>
));

export default Spinner;
