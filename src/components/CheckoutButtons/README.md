# `<CheckoutButtons />`

This component houses the back and submit functionality on the checkout page.

## Available Props

| Prop                | PropType             | Description                                         | Default  |
| ------------------- | -------------------- | --------------------------------------------------- | -------- |
| `currentLocation`   | `LocationModel`      | Open Tender location                                | `{}`     |
| `openTenderRef`     | `OpenTenderRefModel` | Open Tender Ref Model                               | `null`   |
| `orderRef`          | `OrderRefModel`      | Open Tender Order Ref Model                         | `{}`     |
| `canSubmitOrder`    | `bool`               | Indicates whether order can be submitted            | `false`  |
| `submitOrder`       | `func`               | submitOrder action from Open Tender                 | `f => f` |
| `submitOrderStatus` | `string`             | submitOrder status from Open Tender                 | IDLE     |
| `history`           | `object`             | History object from React Router DOM's `withRouter` |          |

## Registering a custom `<CheckoutButtons />`

The `RegistryLoader` will look for a component registered at `components.registry.CheckoutButtons` and expects the key `import` to return a function that uses dynamic import syntax.
