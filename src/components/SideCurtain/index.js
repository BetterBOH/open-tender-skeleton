import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetSideCurtain } from 'state/actions/ui/sideCurtainActions';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';

class SideCurtain extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      resetSideCurtain: PropTypes.func
    }),
    sideCurtainIsActive: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    actions: {
      resetSideCurtain: f => f
    },
    sideCurtainIsActive: false,
    children: null
  };

  componentDidUpdate(prevProps) {
    const sideCurtainWasActive = get(prevProps, 'sideCurtainIsActive');
    const sideCurtainIsActive = get(this, 'props.sideCurtainIsActive');

    if (!sideCurtainWasActive && sideCurtainIsActive) {
      freezeScroll();
    }

    if (sideCurtainWasActive && !sideCurtainIsActive) {
      unfreezeScroll();
    }
  }

  render() {
    const {
      sideCurtainIsActive,
      children,
      actions: { resetSideCurtain }
    } = this.props;

    return RegistryLoader(
      { sideCurtainIsActive, resetSideCurtain, children },
      'components.SideCurtain',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  sideCurtainIsActive: get(state, 'sideCurtain.sideCurtainIsActive', false)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ resetSideCurtain }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideCurtain);
