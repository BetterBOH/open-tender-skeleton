# `<MenuItemSizeSelection />`

This component is used to select the size of a menu item.

## Available Props

| Prop       | PropType        | Description                                                           | Default |
| ---------- | --------------- | --------------------------------------------------------------------- | ------- |
| `items`    | `array`         | Selection of similar menu items that are available in different sizes | `[]`    |
| `selected` | `MenuItemModel` | Currently selected menu item                                          | `null`  |

## Registering a custom `<MenuItemSizeSelection />`

The `RegistryLoader` will look for a component registered at `components.registry.MenuItemSizeSelection` and expects the key `import` to return a function that uses dynamic import syntax.
