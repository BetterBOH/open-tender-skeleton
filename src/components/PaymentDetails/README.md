# `<PaymentDetails />`

This component renders a form depending on the `paymentType` prop that allows a user to add a payment method.

## Available Props

| Prop                  | PropType             | Description                                                                   | Default  |
| --------------------- | -------------------- | ----------------------------------------------------------------------------- | -------- |
| `actions`             | `object`             | Object containing createPayment and setPaymentMethod actions from Open Tender |          |
| `orderRef`            | `OrderRefModel`      | Open Tender Order Ref Model                                                   | `{}`     |
| `openTenderRef`       | `OpenTenderRefModel` | Open Tender Ref Model                                                         | `null`   |
| `handleCancel`        | `func`               | Callback that executes when clear is clicked                                  | `f => f` |
| `paymentType`         | `string`             | Type of payment method the user wishes to add                                 | `''`     |
| `userIsAuthenticated` | `bool`               | Indicates whether user is authenticated                                       | `false`  |

## Registering a custom `<PaymentDetails />`

The `RegistryLoader` will look for a component registered at `components.registry.PaymentDetails` and expects the key `import` to return a function that uses dynamic import syntax.
