# `<PaymentDetails />`

This component renders a form based on the paymentType prop that allows a user to add a payment method.

## Available Props

| Prop               | PropType | Description                                  | Default  |
| ------------------ | -------- | -------------------------------------------- | -------- |
| `paymentType`      | `string` | Type of paymentType that a user wants to add | `''`     |
| `orderRef`         | `object` | Order ref                                    | `{}`     |
| `setPaymentMethod` | `func`   | Function that creates the payment type       | `f => f` |
| `cancel`           | `func`   | Function that executes when clear is clicked | `f => f` |

## Registering a custom `<PaymentDetails />`

The `RegistryLoader` will look for a component registered at `components.registry.PaymentDetails` and expects the key `import` to return a function that uses dynamic import syntax.
