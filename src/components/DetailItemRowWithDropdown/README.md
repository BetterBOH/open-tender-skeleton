# `<DetailItemRowWithDropdown />`

This component renders a detail with a dropdown, a label, and an icon.

## Available Props

| Prop       | PropType          | Description                                                                               | Default  |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------- | -------- |
| `label`    | `string`          | Label for the detail                                                                      | `null`   |
| `icon`     | `string`          | Icon for the detail                                                                       | `null`   |
| `value`    | `string`          | Value for the detail                                                                      | `''`     |
| `children` | `node` or `array` | React element(s) passed in as children that are rendered in the dropdown                  | `null`   |
| `onClick`  | `func`            | Callback that runs when dropdown is clicked (usually shows children in drawer for mobile) | `f => f` |

## Registering a custom `<DetailItemRowWithDropdown />`

The `RegistryLoader` will look for a component registered at `components.registry.DetailItemRowWithDropdown` and expects the key `import` to return a function that uses dynamic import syntax.
