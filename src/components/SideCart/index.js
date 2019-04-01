import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { resetModal } from 'state/actions/ui/modalActions';

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
    const { sideCartIsActive } = this.props;

    return RegistryLoader(
      { modalIsActive, variant, data, actions },
      'components.SideCart',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  sideCartIsActive: get(state, 'modal.modalIsActive', false)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ resetModal }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideCart);
