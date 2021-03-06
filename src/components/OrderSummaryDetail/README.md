# `<OrderSummaryDetail />`

This component is used to show a detail of a summary of the current order. All props are optional except for value.

## Available Props

| Prop       | PropType | Description          | Default |
| ---------- | -------- | -------------------- | ------- |
| `value`    | `string` | Value of the detail  | `null`  |
| `label`    | `string` | Label for the detail | `''`    |
| `icon`     | `string` | Icon for the detail  | `''`    |
| `imageUrl` | `string` | Image for the detail | `''`    |

## Registering a custom `<OrderSummaryDetail />`

The `RegistryLoader` will look for a component registered at `components.OrderSummaryDetail` and expects the key `import` to return a function that uses dynamic import syntax.
