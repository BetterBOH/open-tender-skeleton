# `<PromoCode />`

This component is used to apply a promo code to an order.

## Available Props

| Prop              | PropType | Description                | Default |
| ----------------- | -------- | -------------------------- | ------- |
| `validPromoCodes` | `array`  | Array of valid promo codes | `[]`    |

## Registering a custom `<PromoCode />`

The `RegistryLoader` will look for a component registered at `components.registry.PromoCode` and expects the key `import` to return a function that uses dynamic import syntax.
