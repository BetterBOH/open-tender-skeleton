# `<PromoCode />`

This component is used to apply a promo code to an order.

## Available Props

| Prop                 | PropType | Description                                           | Default  |
| -------------------- | -------- | ----------------------------------------------------- | -------- |
| `setPromoCodeStatus` | `string` | setPromoCode status from OT                           | IDLE     |
| `setPromoCodeError`  | `string` | setPromoCode error from selector                      | `null`   |
| `handleSubmit`       | `func`   | Callback that will run when `Apply` button is clicked | `f => f` |

## Registering a custom `<PromoCode />`

The `RegistryLoader` will look for a component registered at `components.registry.PromoCode` and expects the key `import` to return a function that uses dynamic import syntax.
