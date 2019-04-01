import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetSideCart } from 'state/actions/ui/sideCartActions';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';

class SideCart extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      resetSideCart: PropTypes.func
    }),
    sideCartIsActive: PropTypes.bool
  };

  static defaultProps = {
    actions: {
      resetSideCart: f => f
    },
    sideCartIsActive: false
  };

  componentDidUpdate(prevProps) {
    const sideCartWasActive = get(prevProps, 'sideCartIsActive');
    const sideCartIsActive = get(this, 'props.sideCartIsActive');

    if (!sideCartWasActive && sideCartIsActive) {
      freezeScroll();
    }

    if (sideCartWasActive && !sideCartIsActive) {
      unfreezeScroll();
    }
  }

  render() {
    const {
      sideCartIsActive,
      actions: { resetSideCart }
    } = this.props;

    return RegistryLoader(
      { sideCartIsActive, resetSideCart },
      'components.SideCart',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  sideCartIsActive: get(state, 'sideCart.sideCartIsActive', false)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ resetSideCart }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideCart);
