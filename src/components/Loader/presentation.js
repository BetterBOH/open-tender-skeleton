import React from 'react';

const Loader = React.memo(() => (
  <div className="Loader vh100 vw100 flex justify-center items-center">
    <div className="Spinner Spinner--loader" />
  </div>
));

export default Loader;
