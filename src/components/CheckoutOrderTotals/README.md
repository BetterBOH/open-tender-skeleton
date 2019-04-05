# `<CheckoutOrderTotals />`

This component displays order totals and discounts on the Checkout page.

## Available Props

| Prop              | PropType | Description       | Default |
| ----------------- | -------- | ----------------- | ------- |
| `subtotalWithTax` | `string` | Subtotal plus tax | `""`    |
| `rewards`         | `string` | discount          | `""`    |
| `total`           | `string` | total price       | `""`    |

## Registering a custom `<CheckoutOrderTotals />`

The `RegistryLoader` will look for a component registered at `components.registry.CheckoutOrderTotals` and expects the key `import` to return a function that uses dynamic import syntax.
