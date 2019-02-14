# `<QuantitySpinner />`

This component is used to increment and decrement a line item's quantity.

## Available Props

| Prop              | PropType | Description                                             | Default  |
| ----------------- | -------- | ------------------------------------------------------- | -------- |
| `quantity`        | `number` | Quantity of a line item                                 | `0`      |
| `max`             | `number` | Maximum quantity of a line item                         | `null`   |
| `handleIncrement` | `func`   | Callback that will run when the `+` button is clicked   | `f => f` |
| `handleDecrement` | `func`   | Callback that will run when the `-` button is clicked   | `f => f` |
| `disabled`        | `bool`   | Optionlly disable the spinner and display quantity only | `false`  |

## Registering a custom `<QuantitySpinner />`

The `RegistryLoader` will look for a component registered at `components.registry.QuantitySpinner` and expects the key `import` to return a function that uses dynamic import syntax.
