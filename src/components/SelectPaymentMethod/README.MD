# `<SelectPaymentMethod />`

This component lets a user select a payment method.

## Available Props

| Prop               | PropType   | Description                                       | Default  |
| -----------------  | ---------- | ------------------------------------------------- | -------- |
| `confirm`          | `function` | Function to execute when submit button is clicked | `f => f`     |
| `cancel`           | `function` | Function to execute when clear button is clicked  | `f => f`     |
| `paymentsById`     | `object`   | Object of a user's payment methods                | `{}` |
| `orderRef`         | `object`   | Order ref                                         | `{}` |
| `setPaymentMethod` | `function` | Function that sets a payment method               | `f => f` |

## Registering a custom `<SelectPaymentMethod />`

The `RegistryLoader` will look for a component registered at `components.registry.SelectPaymentMethod` and expects the key `import` to return a function that uses dynamic import syntax.
