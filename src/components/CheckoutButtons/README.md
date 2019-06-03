# `<CheckoutButtons />`

This component houses the back and submit functionality on the checkout page.

## Available Props

| Prop                | PropType             | Description                          | Default  |
| ------------------- | -------------------- | ------------------------------------ | -------- |
| `currentLocationId` | `number`             | Open Tender Location ID              | `null`   |
| `openTenderRef`     | `OpenTenderRefModel` | Open Tender Ref Model                | `null`   |
| `orderRef`          | `OrderRefModel`      | Open Tender Order Ref Model          | `{}`     |
| `canSubmitOrder`    | `bool`               | Determines if order can be submitted | `false`  |
| `submitOrder`       | `func`               | SubmitOrder action from OT           | `f => f` |

## Registering a custom `<CheckoutButtons />`

The `RegistryLoader` will look for a component registered at `components.registry.CheckoutButtons` and expects the key `import` to return a function that uses dynamic import syntax.
