import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class MenuNavCard extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      selectedCategory: PropTypes.string,
      menuTitle: PropTypes.string,
      menuCategories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          slug: PropTypes.string.isRequired
        })
      )
    }),
    actions: PropTypes.shape({
      resetModal: PropTypes.func
    })
  };

  static defaultProps = {
    data: {
      selectedCategory: null,
      menuTitle: '',
      menuCategories: []
    },
    actions: {
      resetModal: f => f
    }
  };

  render() {
    const { data, actions } = this.props;
    const menuTitle = get(data, 'menuTitle');
    const menuCategories = get(data, 'menuCategories');
    const selectedCategory = get(data, 'selectedCategory');

    return RegistryLoader(
      {
        menuTitle,
        menuCategories,
        selectedCategory,
        resetModal: get(actions, 'resetModal')
      },
      'components.MenuNavCard',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  data: get(state, 'modal.data')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetModal
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuNavCard);
