# `<OrderSummaryButtons />`

This component houses the buttons that appear on the OrderSummaryView.

## Available Props

| Prop                  | PropType | Description                                        | Default  |
| --------------------- | -------- | -------------------------------------------------- | -------- |
| `orderIsPending`      | `bool`   | Indicates whether order is pending or completed    | `false`  |
| `userIsAuthenticated` | `bool`   | Indicates whether customer is authenticated or not | `false`  |
| `attemptReorder`      | `func`   | Action which attempts to reorder a previous order  | `f => f` |

orderIsPending: PropTypes.bool,
userIsAuthenticated: PropTypes.bool,
attemptReorder: PropTypes.func

## Registering a custom `<OrderSummaryButtons />`

The `RegistryLoader` will look for a component registered at `components.registry.OrderSummaryButtons` and expects the key `import` to return a function that uses dynamic import syntax.
