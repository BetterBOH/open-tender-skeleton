import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import LineItemModel from 'constants/Models/LineItemModel';
import { withRouter } from 'react-router-dom';

const CartButton = React.memo(
  ({ className, onClick, icon, currentLineItems, location }) =>
    RegistryLoader(
      { className, onClick, icon, currentLineItems, location },
      'components.CartButton',
      () => import('./presentation.js')
    )
);

CartButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  currentLineItems: PropTypes.arrayOf(LineItemModel.propTypes),
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

CartButton.defaultProps = {
  className: '',
  onClick: f => f,
  icon: 'Bag',
  currentLineItems: [],
  location: null
};

export default withRouter(CartButton);
