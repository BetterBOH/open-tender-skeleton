# `<Dropdown />`

This component is used to house other components in an expandable/collapsible dropdown.

## Available Props

| Prop               | PropType          | Description                                      | Default  |
| ------------------ | ----------------- | ------------------------------------------------ | -------- |
| `children`         | `node` or `array` | React element(s) to be rendered in the dropdown  | `null`   |
| `onClose`          | `func`            | Callback that closes the dropdown                | `f => f` |
| `dropdownIsActive` | `bool`            | Indicates whether the dropdown should be visible | `false`  |

## Registering a custom `<Dropdown />`

The `RegistryLoader` will look for a component registered at `components.Dropdown` and expects the key `import` to return a function that uses dynamic import syntax.
