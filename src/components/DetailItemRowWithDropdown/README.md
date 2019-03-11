# `<DetailItemRowWithDropdown />`

This component renders a detail with a dropdown, a label, and an icon.

## Available Props

| Prop    | PropType | Description          | Default |
| ------- | -------- | -------------------- | ------- |
| `label` | `string` | Label for the detail | `''`    |
| `icon`  | `string` | Icon for the detail  | `''`    |
| `value` | `string` | Value for the detail | `''`    |

## Registering a custom `<DetailItemRowWithDropdown />`

The `RegistryLoader` will look for a component registered at `components.registry.DetailItemRowWithDropdown` and expects the key `import` to return a function that uses dynamic import syntax.
