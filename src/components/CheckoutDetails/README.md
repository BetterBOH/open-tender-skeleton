# `<CheckoutDetails />`

This component allows a user to see and edit their order details at checkout.

## Available Props

| Prop              | PropType        | Description                                                | Default |
| ----------------- | --------------- | ---------------------------------------------------------- | ------- |
| `location`        | `LocationModel` | Open Tender Location Model                                 | `{}`    |
| `order`           | `OrderModel`    | Open Tender Order Model                                    | `{}`    |
| `orderRef`        | `OrderRefModel` | Open Tender Order Ref Model                                | `{}`    |
| `actions`         | `object`        | Object containing setPromoCode action from Open Tender     |         |
| `customer`        | `CustomerModel` | Open Tender Customer Model                                 | `null`  |
| `payments`        | `array`         | List of Open Tender payment methods from `paymentsAsArray` | `[]`    |
| `activePayment`   | `PaymentModel`  | Open Tender Payment Model                                  | `null`  |
| `promoCodeErrors` | `array`         | List of errors from `promoCodeErrors` selector             | `[]`    |

## Registering a custom `<CheckoutDetails />`

The `RegistryLoader` will look for a component registered at `components.registry.CheckoutDetails` and expects the key `import` to return a function that uses dynamic import syntax.
