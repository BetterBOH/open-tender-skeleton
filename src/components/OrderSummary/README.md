# `<OrderSummary />`

This component is used to show a summary of an order.

## Available Props

| Prop               | PropType | Description                      | Default |
| ------------------ | -------- | -------------------------------- | ------- |
| `orderSummaryData` | `object` | Order summary data from selector | `null`  |

## Registering a custom `<OrderSummary />`

The `RegistryLoader` will look for a component registered at `components.registry.OrderSummary` and expects the key `import` to return a function that uses dynamic import syntax.
