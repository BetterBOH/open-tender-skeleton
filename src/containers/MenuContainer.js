import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';

import get from 'utils/get';

class MenuContainer extends ContainerBase {
  view = import('views/MenuView');
}

const mapStateToProps = state => ({
  brand: get(state, 'openTender.data.brands.brand'),
  order: get(state, 'order'),
  openTenderRef: get(state, 'openTender.ref')
});

export default connect(mapStateToProps)(MenuContainer);
