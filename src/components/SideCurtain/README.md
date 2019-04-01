# `<SideCurtain />`

This component is used to display components in a side curtain

## Available Props

| Prop                  | PropType | Description                                      | Default  |
| --------------------- | -------- | ------------------------------------------------ | -------- |
| `sideCurtainIsActive` | `bool`   | Value in Redux if side curtain should be visible | `false`  |
| `resetSideCurtain`    | `func`   | Resets side curtain in redux                     | `f => f` |

## Registering a custom `<SideCurtain />`

The `RegistryLoader` will look for a component registered at `components.registry.Modal` and expects the key `import` to return a function that uses dynamic import syntax.
