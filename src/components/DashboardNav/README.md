# `<DashboardNav />`

This component highlights the current active dashboard section and houses buttons which help smoothly navigate to the selected section.

## Available Props

| Prop            | PropType | Description                                    | Default |
| --------------- | -------- | ---------------------------------------------- | ------- |
| `activeSection` | `string` | Describes the current active dashboard section | Reorder |

## Registering a custom `<DashboardNav />`

The `RegistryLoader` will look for a component registered at `components.DashboardNav` and expects the key `import` to return a function that uses dynamic import syntax.
