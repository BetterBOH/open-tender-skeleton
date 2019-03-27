# `<ChoosePaymentType />`

This component lets you choose a payment type to add.

## Available Props

| Prop                      | PropType   | Description                                     | Default  |
| ------------------------- | ---------- | ----------------------------------------------- | -------- |
| `confirm`                 | `function` | Function called when use clicks confirm         | `f => f` |
| `cancel`                  | `function` | Function called when use clicks clear           | `f => f` |
| `paymentTypes`            | `array`    | An array of payment types that the user can add | `[]`     |
| `newPaymentMethodType`    | `string`   | The type of payment method user has selected    | `''`     |
| `selectPaymentMethodType` | `function` | Function that sets newPaymentMethodType         | `f => f` |

## Registering a custom `<ChoosePaymentType />`

The `RegistryLoader` will look for a component registered at `components.registry.ChoosePaymentType` and expects the key `import` to return a function that uses dynamic import syntax.
