import React from 'react';

const MapboxMap = ({ className, mapId }) => {
  const classes = cx('w100 h100', { [className]: className });

  return <figure id={mapId} className={classes} />;
};

export default MapboxMap;
