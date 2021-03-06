import React from 'react';
import cx from 'classnames';
import icons from 'components/Icon/svgs';

const Icon = React.memo(
  ({ icon, fill, className, alt, variant, uniqueAriaId }) => {
    const component = icons[icon];

    if (!component) return null;

    // TO-DO: Make an 'icon' registry to swap out SVGs on the fly during config
    return (
      <div className={cx('Icon flex', `Icon--${variant}`, className)}>
        {React.createElement(icons[icon], { fill, alt, uniqueAriaId })}
      </div>
    );
  }
);

export default Icon;
