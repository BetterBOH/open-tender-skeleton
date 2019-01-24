import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { Icon, Text } from 'components';

const LinkButton = ({
  className,
  children,
  iconLeft,
  iconRight,
  onClick,
  text,
  to,
  variant
}) => {
  const Inner = (
    <div
      className={cx(
        'LinkButton flex items-center w100 bg-color-white shadow-sm radius-md m_5 py_5 px1',
        className,
        {
          'LinkButton--primary': variant === 'primary'
        }
      )}
    >
      {iconLeft ? (
        <div className="LinkButton__icon col-1">
          <Icon icon={iconLeft} />
        </div>
      ) : null}

      <div
        className={cx('px1', {
          'col-10': iconLeft && iconRight,
          'col-11': (!iconLeft && iconRight) || (iconLeft && !iconRight),
          'col-12': !iconLeft && !iconRight
        })}
      >
        {text ? <Text>{text}</Text> : <div>{children}</div>}
      </div>

      {iconRight ? (
        <div className="LinkButton__icon col-1">
          <Icon icon={iconRight} />
        </div>
      ) : null}
    </div>
  );

  if (to) {
    if (linkIsExternal(to)) {
      <a href={to} title={text} target="_blank" rel="noopener">
        <Inner />
      </a>;
    } else {
      <Link to={to}>
        <Inner />
      </Link>;
    }
  }

  return (
    <button onClick={onClick}>
      <Inner />
    </button>
  );
};

LinkButton.PropTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.string
};

LinkButton.defaultProps = {
  arrow: true,
  className: '',
  children: null,
  iconLeft: null,
  iconRight: 'Right',
  onClick: f => f,
  text: '',
  to: '',
  variant: 'primary'
};

export default LinkButton;
