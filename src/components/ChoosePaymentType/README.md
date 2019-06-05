# `<ChoosePaymentType />`

This component lets a user choose the type of the new payment method that they wish to add.

## Available Props

| Prop                                  | PropType | Description                                                      | Default  |
| ------------------------------------- | -------- | ---------------------------------------------------------------- | -------- |
| `switchToCreatePaymentMethod`         | `func`   | Callback that switches to the next stage in `PaymentMethods`     | `f => f` |
| `switchToSelectExistingPaymentMethod` | `func`   | Callback that switches to the previous stage in `PaymentMethods` | `f => f` |
| `paymentTypes`                        | `array`  | A list of payment types that the user can add                    | `[]`     |
| `newPaymentMethodType`                | `string` | The type of payment method user has selected                     | `''`     |
| `selectPaymentMethodType`             | `func`   | Callback that sets `newPaymentMethodType` in `PaymentMethods`    | `f => f` |

## Registering a custom `<ChoosePaymentType />`

The `RegistryLoader` will look for a component registered at `components.registry.ChoosePaymentType` and expects the key `import` to return a function that uses dynamic import syntax.
