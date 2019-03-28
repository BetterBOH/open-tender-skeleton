# `<AddCreditCard />`

This component is used for adding a credit card.

## Available Props

| Prop               | PropType | Description                                  | Default  |
| ------------------ | -------- | -------------------------------------------- | -------- |
| `orderRef`         | `object` | Order ref                                    | `{}`     |
| `setPaymentMethod` | `func`   | Method to create payment                     | `f => f` |
| `handleCancel`     | `func`   | Function that executes when clear is clicked | `f => f` |

## Registering a custom `<AddCreditCard />`

The `RegistryLoader` will look for a component registered at `components.registry.AddCreditCard` and expects the key `import` to return a function that uses dynamic import syntax.
