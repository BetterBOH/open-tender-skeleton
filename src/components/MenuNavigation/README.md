# `<MenuNavigation />`

This component is used in the menu to navigate between sections and filter by allergens/flavors.

## Available Props

| Prop   | PropType    | Description      | Default     |
| ------ | ----------- | ---------------- | ----------- |
| `menu` | `MenuModel` | MenuModel object | `MenuModel` |

## Registering a custom `<MenuNavigation />`

The `RegistryLoader` will look for a component registered at `components.registry.MenuNavigation` and expects the key `import` to return a function that uses dynamic import syntax.
