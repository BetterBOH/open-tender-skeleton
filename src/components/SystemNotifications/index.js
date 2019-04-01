import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeNotification } from 'state/actions/ui/systemNotificationsActions';

import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';

class SystemNotifications extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      closeNotification: PropTypes.func
    }),
    notifications: PropTypes.arrayOf(
      PropTypes.shape({
        uuid: PropTypes.string
      })
    )
  };

  static defaultProps = {
    actions: {
      closeNotification: f => f
    },
    notifications: []
  };

  closeNotification = uuid => this.props.actions.closeNotification(uuid);

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
  notifications: get(state, 'systemNotifications')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ closeNotification }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withBrand(withLocales(SystemNotifications)));
