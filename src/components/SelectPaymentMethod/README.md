# `<SelectPaymentMethod />`

This component lets a user select or set a payment method as default.

## Available Props

| Prop                                 | PropType        | Description                                                                                       | Default    |
| ------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------- | ---------- |
| `variant`                            | `string`        | Indicates which version of the component to render (Edit account or order)                        | EDIT_ORDER |
| `actions`                            | `object`        | Object containing setPaymentMethod, setDefaultPayment, and deletePayment actions from Open Tender |            |
| `switchToSelectNewPaymentMethodType` | `func`          | Callback that switches to the next stage in `PaymentMethods`                                      | `f => f`   |
| `handleCancel`                       | `func`          | Callback that runs when the cancel button is clicked                                              | `f => f`   |
| `paymentMethodsById`                 | `object`        | Object containing a user's payment methods with IDs as keys                                       | `{}`       |
| `orderRef`                           | `OrderRefModel` | Open Tender Order Ref Model                                                                       | `{}`       |
| `defaultPaymentMethodId`             | `number`        | ID of the user's current default payment method                                                   | `null`     |
| `setDefaultPaymentIsPending`         | `bool`          | Indicates whether setDefaultPayment status from Open Tender is `PENDING`                          |            |

## Registering a custom `<SelectPaymentMethod />`

The `RegistryLoader` will look for a component registered at `components.registry.SelectPaymentMethod` and expects the key `import` to return a function that uses dynamic import syntax.
