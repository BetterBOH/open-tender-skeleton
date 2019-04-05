import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AccountDetailsModel from 'constants/Models/AccountDetailsModel';
import RegistryLoader from 'lib/RegistryLoader';
import { setDrawer } from 'state/actions/ui/drawerActions';
import withLocales from 'lib/withLocales';

class AccountDetails extends PureComponent {
  static propTypes = {
    accountDetails: AccountDetailsModel.propTypes
  };

  static defaultProps = {
    accountDetails: AccountDetailsModel.defaultProps
  };

  render() {
    const { accountDetails, localesContext } = this.props;
    const { setDrawer } = this.props.actions;

    return RegistryLoader(
      {
        accountDetails,
        localesContext,
        setDrawer
      },
      'components.AccountDetails',
      () => import('./presentation')
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setDrawer
    },
    dispatch
  )
});

export default connect(
  null,
  mapDispatchToProps
)(withLocales(AccountDetails));
