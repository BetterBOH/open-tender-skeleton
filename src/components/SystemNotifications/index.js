import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeSystemNotification } from 'state/actions/ui/systemNotificationsActions';

import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

class SystemNotifications extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      closeSystemNotification: PropTypes.func
    }),
    notifications: PropTypes.arrayOf(
      PropTypes.shape({
        uuid: PropTypes.string
      })
    )
  };

  static defaultProps = {
    actions: {
      closeSystemNotification: f => f
    },
    notifications: []
  };

  closeNotification = uuid => this.props.actions.closeSystemNotification(uuid);

  render() {
    const { notifications } = this.props;
    return RegistryLoader(
      { notifications, closeNotification: this.closeNotification },
      'components.SystemNotifications',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  notifications: get(state, 'systemNotifications.notifications')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ closeSystemNotification }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withBrand(withLocales(SystemNotifications)));
