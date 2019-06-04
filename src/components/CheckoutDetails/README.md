# `<CheckoutDetails />`

This component allows a user to see and edit their order details at checkout.

## Available Props

| Prop              | PropType        | Description                                                 | Default |
| ----------------- | --------------- | ----------------------------------------------------------- | ------- |
| `location`        | `LocationModel` | Open Tender location                                        | `{}`    |
| `order`           | `OrderModel`    | Open Tender order                                           | `{}`    |
| `orderRef`        | `OrderRefModel` | Open Tender Order Ref Model                                 | `null`  |
| `actions`         | `object`        | Object containing setPromoCode action from Open Tender      |         |
| `customer`        | `CustomerModel` | Open Tender customer                                        | `null`  |
| `payments`        | `array`         | Array of Open Tender payment methods from `paymentsAsArray` | `[]`    |
| `activePayment`   | `PaymentModel`  | Open Tender payment method                                  | `null`  |
| `promoCodeErrors` | `array`         | Array of errors pertaining to promo codes from selector     | `[]`    |

## Registering a custom `<CheckoutDetails />`

The `RegistryLoader` will look for a component registered at `components.registry.CheckoutDetails` and expects the key `import` to return a function that uses dynamic import syntax.
