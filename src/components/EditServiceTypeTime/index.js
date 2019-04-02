import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';

class EditServiceTypeTime extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { localesContext } = this.props;

    return RegistryLoader(
      {
        localesContext
      },
      'components.EditServiceTypeTime',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withBrand(withLocales(EditServiceTypeTime)));
