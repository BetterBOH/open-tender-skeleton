import React, { PureComponent } from 'react';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetModal } from 'state/actions/ui/modalActions';

import { Card, Text } from 'components';
import { Link } from 'react-scroll';

class MenuNavModal extends PureComponent {
  componentDidUpdate(prevProps) {
    if (
      get(prevProps, 'selectedCategory') !== get(this, 'props.selectedCategory')
    ) {
      get(this, 'props.actions.resetModal', f => f)();
    }
  }

  render() {
    const menuType = get(this, 'props.data.menuType');
    const menuName = !!menuType ? `${menuType} Menu` : 'Menu';
    const menuCategories = get(this, 'props.data.menuCategories');

    return (
      <div>
        <Text size="description" className="text-bold">
          {menuName}
        </Text>
        <button onClick={get(this, 'props.actions.resetModal')}>test</button>
        <Card className="ml1 p1">
          <div className="flex flex-col">
            {menuCategories.map(category => (
              <Link
                key={get(category, 'id')}
                className="color-gray"
                activeClass="color-black"
                duration={1000}
                smooth="easeInOutQuad"
                spy
                to={get(category, 'slug')}
                onSetActive={() => handleSetActive(get(category, 'name'))}
              >
                <Text size="small">{get(category, 'name')}</Text>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => state;

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
)(MenuNavModal);
