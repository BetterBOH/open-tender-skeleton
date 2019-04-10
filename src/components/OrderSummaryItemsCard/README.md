# `<OrderSummaryItemsCard />`

This component renders a list of OrderSummaryItemRows

## Available Props

| Prop    | PropType | Description                              | Default |
| ------- | -------- | ---------------------------------------- | ------- |
| `items` | `array`  | An array of items from a completed order | `[]`    |

## Registering a custom `<OrderSummaryItemsCard />`

The `RegistryLoader` will look for a component registered at `components.registry.OrderSummaryItemsCard` and expects the key `import` to return a function that uses dynamic import syntax.
