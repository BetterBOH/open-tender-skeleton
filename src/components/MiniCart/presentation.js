import React from 'react';
import { Text, Button, Icon, OrderSubtotal } from 'components';

const MiniCart = React.memo(
  ({ handleAddMore, handleCheckOut, handleClose }) => {
    return (
      <div className="MiniCart h100 w100 bg-color-gray-light">
        <div className="MiniCart__footer fixed r0 b0 l0 bg-color-white">
          <div className="MiniCart__footer__subtotal-row">
            <OrderSubtotal subtotal="0.00" />
          </div>
          <div className="MiniCart__footer__actions-row bg-color-gray-light p1_5 flex">
            <Button
              className={`flex-1 mr1 bg-color-white color-black shadow-md`}
              variant="primary"
              onClick={handleCheckOut}
            >
              <Text size="cta-small">Add More</Text>
            </Button>
            <Button
              className={`flex-1 mr1 bg-color-black color-white shadow-md`}
              variant="primary"
              onClick={handleCheckOut}
            >
              <Text size="cta-small">Check out</Text>
            </Button>
            <Button
              variant="icon-circle-primary"
              className={`bg-color-gray-dark`}
              onClick={handleClose}
            >
              <Icon fill="white" icon="Close" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default MiniCart;
