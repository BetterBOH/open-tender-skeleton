# `<OrderSubtotal />`

This component is used to display the order subtotal in the cart.

## Available Props

| Prop       | PropType | Description     | Default |
| ---------- | -------- | --------------- | ------- |
| `subtotal` | `number` | Subtotal amount | `0`     |

## Registering a custom `<OrderSubtotal />`

The `RegistryLoader` will look for a component registered at `components.registry.OrderSubtotal` and expects the key `import` to return a function that uses dynamic import syntax.
