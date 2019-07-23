import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import RegistryLoader from 'lib/RegistryLoader';
import BrandModel from 'constants/Models/BrandModel';

class AppBackground extends PureComponent {
  static propTypes = {
    brand: BrandModel.propTypes
  };

  static defaultProps = {
    brand: BrandModel.defaultProps
  };

  render() {
    const { location, brand } = this.props;

    return RegistryLoader({ location, brand }, 'components.AppBackground', () =>
      import('./presentation.js')
    );
  }
}

export default withRouter(AppBackground);
