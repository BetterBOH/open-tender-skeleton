import React, { PureComponent } from 'react';
import { MenuHero, Menus, MenuStatus, MenuNavigation } from 'components';
import { FLAGS, isEnabled } from 'utils/featureFlags';

class MenuView extends PureComponent {
  render() {
    const {
      currentLocation,
      menu,
      menuStatus,
      orderData,
      currentMenuQuantities
    } = this.props;

    return (
      <main className="container relative bg-color-white">
        <MenuHero
          orderData={orderData}
          location={currentLocation}
          menu={menu}
        />
        <MenuNavigation menu={menu} />
        <Menus menu={menu} currentMenuQuantities={currentMenuQuantities} />
        {isEnabled(FLAGS.MENU_STATUS) && <MenuStatus status={menuStatus} />}
      </main>
    );
  }
}

export default MenuView;
