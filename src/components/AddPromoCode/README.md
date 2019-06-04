# `<AddPromoCode />`

This component is used for adding a promo code.

## Available Props

| Prop              | PropType | Description                                           | Default  |
| ----------------- | -------- | ----------------------------------------------------- | -------- |
| `handleSubmit`    | `func`   | Function fired on blur, should take promo code string | `f => f` |
| `promoCodeErrors` | `array`  | List of errors from `promoCodeErrors` selector        | `[]`     |
| `promoCode`       | `string` | Initial value for the promo code                      | `''`     |

## Registering a custom `<AddPromoCode />`

The `RegistryLoader` will look for a component registered at `components.registry.AddPromoCode` and expects the key `import` to return a function that uses dynamic import syntax.
