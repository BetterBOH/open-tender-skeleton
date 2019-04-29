# `<OrderSummaryItemRow />`

This is component is used to render an item from a completed order.

## Available Props

| Prop               | PropType | Description                               | Default |
| ------------------ | -------- | ----------------------------------------- | ------- |
| `item`             | `object` | An item from a completed order            | `null`  |
| `fallbackImageSrc` | `string` | If the item image doesn't exist show this | `true`  |

## Registering a custom `<OrderSummaryItemRow />`

The `RegistryLoader` will look for a component registered at `components.registry.OrderSummaryItemRow` and expects the key `import` to return a function that uses dynamic import syntax.
