import React, { PureComponent, createRef } from 'react';
import { Text, Button, Card, ConfirmButtons } from 'components';
import get from 'utils/get';

const InvalidItem = React.memo(props => {
  const quantity = get(props, 'invalidItem.quantity');
  const name = get(props, 'invalidItem.product.name');

  if (!quantity || !name) return null;

  return (
    <div className="flex col-12 pt1 bg-color-white">
      <Text size="description">{`${quantity} x ${name}`}</Text>
    </div>
  );
});

class InvalidItemsInCart extends PureComponent {
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
      invalidItemsInCart,
      handleCancel,
      handleAccept,
      showCancelButton
    } = this.props;

    return (
      <Card className="InvalidItemsInCart bg-color-gray py2">
        <div className="flex flex-col px2">
          <Text size="cta" className="bold">
            {Language.t('invalidItemsInCart.header')}
          </Text>
          <Text className="pt2" size="description">
            {Language.t('invalidItemsInCart.instructions')}
          </Text>
          {invalidItemsInCart.map(invalidItem => (
            <InvalidItem key={invalidItem.uuid} invalidItem={invalidItem} />
          ))}
        </div>
        <div className="flex col-12 pt2 px1">
          {showCancelButton ? (
            <ConfirmButtons
              handleConfirm={handleAccept}
              handleCancel={handleCancel}
              confirmRef={this.confirmRef}
            />
          ) : (
            <Button
              className="col-10 md:col-11 bg-color-gray"
              variant="primary"
              text="Continue"
              onClick={handleAccept}
              elemRef={this.confirmRef}
            />
          )}
        </div>
      </Card>
    );
  }
}

export default InvalidItemsInCart;
