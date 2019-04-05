# `<OrderTotals />`

This component is used to display order totals, including the subtotal with tax and any rewards applied.

## Available Props

| Prop   | PropType | Description                                | Default |
| ------ | -------- | ------------------------------------------ | ------- |
| `data` | `array`  | array of objects with label and price keys | []`     |

## Registering a custom `<OrderTotals />`

The `RegistryLoader` will look for a component registered at `components.registry.OrderTotals` and expects the key `import` to return a function that uses dynamic import syntax.
