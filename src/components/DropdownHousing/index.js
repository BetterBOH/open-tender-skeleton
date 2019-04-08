import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetDropdownHousing } from 'state/actions/ui/dropdownHousingActions';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class DropdownHousing extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      resetDropdownHousing: PropTypes.func
    }),
    dropdownHousingIsActive: PropTypes.bool,
    variant: PropTypes.string,
    data: PropTypes.object
  };

  static defaultProps = {
    actions: {
      resetDropdownHousing: f => f
    },
    dropdownHousingIsActive: false,
    variant: '',
    data: {}
  };

  render() {
    const { dropdownHousingIsActive, variant, data, actions } = this.props;

    return RegistryLoader(
      { dropdownHousingIsActive, variant, data, actions },
      'components.DropdownHousing',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  dropdownHousingIsActive: get(
    state,
    'dropdownHousing.dropdownHousingIsActive',
    false
  ),
  variant: get(state, 'dropdownHousing.variant'),
  data: get(state, 'dropdownHousing.data')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetDropdownHousing
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownHousing);
