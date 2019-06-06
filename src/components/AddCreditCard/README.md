# `<AddCreditCard />`

This component is used for adding a credit card.

## Available Props

| Prop                  | PropType             | Description                                                                   | Default  |
| --------------------- | -------------------- | ----------------------------------------------------------------------------- | -------- |
| `actions`             | `object`             | Object containing setPaymentMethod and createPayment actions from Open Tender |          |
| `orderRef`            | `OrderRefModel`      | Open Tender Order Ref Model                                                   | `null`   |
| `openTenderRef`       | `OpenTenderRefModel` | Open Tender Ref Model                                                         | `null`   |
| `userIsAuthenticated` | `bool`               | Indicates whether user is authenticated                                       | `false`  |
| `handleCancel`        | `func`               | Callback that runs when the cancel button is clicked                          | `f => f` |

## Registering a custom `<AddCreditCard />`

The `RegistryLoader` will look for a component registered at `components.registry.AddCreditCard` and expects the key `import` to return a function that uses dynamic import syntax.
