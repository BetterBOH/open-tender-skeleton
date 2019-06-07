# `<DetailItemRow />`

This component renders a detail with a label and an icon.

## Available Props

| Prop    | PropType | Description                   | Default |
| ------- | -------- | ----------------------------- | ------- |
| `label` | `string` | Label for the detail          | `null`  |
| `icon`  | `string` | Icon for the detail           | `null`  |
| `value` | `string` | Required value for the detail | `''`    |

## Registering a custom `<DetailItemRow />`

The `RegistryLoader` will look for a component registered at `components.DetailItemRow` and expects the key `import` to return a function that uses dynamic import syntax.
