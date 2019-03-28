# `<SelectPaymentMethod />`

This component lets a user select a payment method.

## Available Props

| Prop                      | PropType   | Description                                       | Default  |
| ------------------------  | ---------- | ------------------------------------------------- | -------- |
| `confirm`                 | `func`     | Function to execute when submit button is clicked | `f => f` |
| `cancel`                  | `func`     | Function to execute when clear button is clicked  | `f => f` |
| `paymentMethodsById`      | `object`   | Object of a user's payment methods                | `{}`     |
| `orderRef`                | `object`   | Order ref                                         | `{}`     |
| `setPaymentMethod`        | `func`     | Function that sets a payment method               | `f => f` |

## Registering a custom `<SelectPaymentMethod />`

The `RegistryLoader` will look for a component registered at `components.registry.SelectPaymentMethod` and expects the key `import` to return a function that uses dynamic import syntax.
