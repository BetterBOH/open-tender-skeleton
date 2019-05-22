import React, { PureComponent, createRef } from 'react';
import { Text, Button, Card } from 'components';
import get from 'utils/get';

class LocationIsClosed extends PureComponent {
  constructor() {
    super(...arguments);

    this.confirmRef = createRef();
  }

  componentDidMount() {
    const confirmRef = get(this, 'confirmRef.current');

    if (confirmRef) return confirmRef.focus();

    return null;
  }

  render() {
    const {
      localesContext: { Language },
      handleAccept
    } = this.props;

    return (
      <Card className="LocationIsClosed bg-color-gray py2">
        <div className="flex flex-col px2">
          <Text size="cta" className="bold">
            {Language.t('locationIsClosed.header')}
          </Text>
          <Text className="pt2" size="description">
            {Language.t('locationIsClosed.instructions')}
          </Text>
        </div>
        <div className="flex col-12 pt2 px1">
          <Button
            className="col-10 md:col-11 bg-color-gray"
            variant="primary"
            text="Continue"
            onClick={handleAccept}
            elemRef={this.confirmRef}
          />
        </div>
      </Card>
    );
  }
}

export default LocationIsClosed;
