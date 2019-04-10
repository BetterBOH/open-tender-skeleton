import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetModal } from 'state/actions/ui/modalActions';

import { Card, Text } from 'components';
import { Link } from 'react-scroll';

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
    const menuTitle = get(this, 'props.data.menuName');
    const menuCategories = get(this, 'props.data.menuCategories');
    const selectedCategory = get(this, 'props.data.selectedCategory');

    return (
      <Card className="MenuNavCard absolute t0 l0 p1 m1">
        <Text size="description" className="text-bold">
          {menuTitle}
        </Text>
        <div className="flex flex-col ml1">
          {menuCategories.map(category => (
            <Link
              onClick={get(this, 'props.actions.resetModal')}
              key={get(category, 'id')}
              to={get(category, 'slug')}
              duration={1000}
              smooth="easeInOutQuad"
              spy
            >
              <button
                className={`color-${
                  get(category, 'name') === selectedCategory ? 'black' : 'gray'
                }`}
              >
                <Text size="small">{get(category, 'name')}</Text>
              </button>
            </Link>
          ))}
        </div>
      </Card>
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
