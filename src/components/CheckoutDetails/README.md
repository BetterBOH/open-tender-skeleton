# `<CheckoutDetails />`

This component allows a user to see and edit their order details at checkout.

## Available Props

| Prop       | PropType                | Description                          | Default |
| ---------- | ----------------------- | ------------------------------------ | ------- |
| `location` | `LocationModel`         | Open Tender Location                 | `{}`    |
| `order`    | `OrderModel`            | Open Tender order                    | `{}`    |
| `customer` | `CustomerModel`         | Open Tender cutomer                  | `{}`    |
| `payments` | `Array of PaymentModel` | Array of Open Tender payment methods | `[]`    |

## Registering a custom `<CheckoutDetails />`

The `RegistryLoader` will look for a component registered at `components.registry.CheckoutDetails` and expects the key `import` to return a function that uses dynamic import syntax.
