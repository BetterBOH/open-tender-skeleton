import React from 'react';

const OrderTotals = React.memo(props => {
  const { data, Language } = props;

  return (
    <div className="col-12 md:col-5 lg:col-4">
      {Object.keys(data).map(key => {
        return (
          <div className="flex justify-between">
            <p>
              {!!Language.t(`cart.${key}`) ? Language.t(`cart.${key}`) : key}
            </p>
            <p>{data[key]}</p>
          </div>
        );
      })}
    </div>
  );
});

export default OrderTotals;
