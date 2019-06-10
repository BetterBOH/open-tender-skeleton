import React from 'react';

const Loader = React.memo(() => (
  <div className="Loader vh100 vw100 flex justify-center items-center">
    <div className="Spinner__icon Spinner__icon--large" />
  </div>
));

export default Loader;
