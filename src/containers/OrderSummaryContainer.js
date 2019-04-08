import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';

class OrderSummaryContainer extends ContainerBase {
  view = import('views/OrderSummaryView');
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummaryContainer);
