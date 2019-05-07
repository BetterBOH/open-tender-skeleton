import React, { PureComponent, createRef } from 'react';
import { Text, Icon, ConfirmButtons } from 'components';
import get from 'utils/get';

const InvalidItem = React.memo(props => {
  const quantity = get(props, 'invalidItem.quantity');
  const name = get(props, 'invalidItem.product.name');

  if (!quantity || !name) return null;

  return <Text size="description">{`${quantity}x ${name}`}</Text>;
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
      invalidItemsInCart,
      handleCancel,
      handleAccept,
      localesContext,
      brandContext
    } = this.props;

    return (
      <div className="InvalidItemsInCart flex items-center justify-center vh100 vw100">
        <div className="InvalidItemsInCart__inner flex flex-col">
          <span className="flex items-center">
            <Icon
              className="mr_5"
              variant="small"
              icon="Error"
              fill={get(brandContext, 'colors.error')}
            />
            <Text size="cta" className="bold">
              {localesContext.Language.t('invalidItemsInCart.header')}
            </Text>
          </span>
          <Text className="mt2" size="description">
            {localesContext.Language.t('invalidItemsInCart.instructions')}
          </Text>
          <div className="flex col-12 mt1 mb3">
            {invalidItemsInCart.map(invalidItem => (
              <InvalidItem key={invalidItem.uuid} invalidItem={invalidItem} />
            ))}
          </div>
          <ConfirmButtons
            handleCancel={handleCancel}
            handleConfirm={handleAccept}
            confirmRef={this.confirmRef}
          />
        </div>
      </div>
    );
  }
}

export default InvalidItemsInCart;
