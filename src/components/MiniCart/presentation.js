import React from 'react';
import { Text, Button, Icon } from 'components';

const MiniCart = React.memo(
  ({ handleAddMore, handleCheckOut, handleClose }) => {
    return (
      <div className="MiniCart h100 w100 bg-color-black">
        <div className="MiniCart__footer fixed r0 b0 l0 p1_5 bg-color-white">
          <div className="MiniCart__footer__actions-row flex">
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
