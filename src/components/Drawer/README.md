# `<Drawer />`

This component is used to render certain components in a drawer.

## Available Props

| Prop               | PropType | Description                                    | Default  |
| ------------------ | -------- | ---------------------------------------------- | -------- |
| `drawerIsActive`   | `bool`   | Indicates whether the drawer should be visible | `false`  |
| `variant`          | `string` | Describes which drawer should be rendered      | `''`     |
| `data`             | `object` | Data for specific drawers                      | `{}`     |
| `resetDrawer`      | `func`   | Resets drawer data in redux                    | `f => f` |
| `accountDetails`   | `object` | Account details object from selector           |          |
| `updateUserStatus` | `string` | updateUser status from Open Tender             | IDLE     |

## Registering a custom `<Drawer />`

The `RegistryLoader` will look for a component registered at `components.registry.Drawer` and expects the key `import` to return a function that uses dynamic import syntax.
