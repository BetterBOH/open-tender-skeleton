import React from 'react';
import cx from 'classnames';

const Image = ({ src, alt, style, isBg, loaded, classes, children }) => {
  let bgStyle = {
    ...style,
    backgroundColor: 'gray',
    backgroundImage: `url(${src})`
  };

  const styleNames = cx('Image', {
    'Image--active': loaded
  });

  if (isBg) {
    return (
      <div className={cx(classes, styleNames)} style={bgStyle}>
        {children}
      </div>
    );
  }
  
  return (
    <img
      style={style}
      className={cx(classes, styleNames)}
      src={src}
      alt={alt}
    />
  );
};

export default Image;
