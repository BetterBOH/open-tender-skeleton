# `<DashboardOrderSummary />`

This component is used in the dashboard to show a summary of the current order/cart.

## Available Props

| Prop               | PropType            | Description              | Default             |
| ------------------ | ------------------- | ------------------------ | ------------------- |
| `orderSummaryData` | `OrderSummaryModel` | OrderSummaryModel object | `OrderSummaryModel` |

## Registering a custom `<DashboardOrderSummary />`

The `RegistryLoader` will look for a component registered at `components.registry.DashboardOrderSummary` and expects the key `import` to return a function that uses dynamic import syntax.