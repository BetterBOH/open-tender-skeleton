# `<ChoosePaymentType />`

This component lets you choose a payment type to add.

## Available Props

| Prop                      | PropType   | Description                                  | Default  |
| ------------------------- | ---------- | -------------------------------------------- | -------- |
| `confirm`                 | `function` | Order ref                                    | `f => f` |
| `cancel`                  | `function` | Method to create payment method              | `f => f` |
| `paymentTypes`            | `array`    | Function that executes when clear is clicked | `[]`     |
| `newPaymentMethodType`    | `string`   | Function that executes when clear is clicked | `''`     |
| `selectPaymentMethodType` | `function` | Function that executes when clear is clicked | `f => f` |

## Registering a custom `<ChoosePaymentType />`

The `RegistryLoader` will look for a component registered at `components.registry.ChoosePaymentType` and expects the key `import` to return a function that uses dynamic import syntax.
