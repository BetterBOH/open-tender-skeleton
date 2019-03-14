# `<MenuStatus />`

This component displays the status of the current menu on the menu view.

## Available Props

| Prop     | PropType | Description                                  | Default |
| -------- | -------- | -------------------------------------------- | ------- |
| `status` | `string` | Menu status derived from MenuStatus selector | `''`    |

## Registering a custom `<MenuStatus />`

The `RegistryLoader` will look for a component registered at `components.registry.MenuStatus` and expects the key `import` to return a function that uses dynamic import syntax.
