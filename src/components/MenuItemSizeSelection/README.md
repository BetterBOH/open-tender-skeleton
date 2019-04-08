# `<MenuItemSizeSelection />`

This component is used to select the size of a menu item. A menu item may have many option groups, one of which is for size configuration. The option items within this size option group are the available sizes.

## Available Props

| Prop                      | PropType        | Description                                                                  | Default |
| ------------------------- | --------------- | ---------------------------------------------------------------------------- | ------- |
| `menuItemSizeOptionGroup` | `object`        | An option group containing a menu item's option items for size configuration | `null`  |
| `selected`                | `MenuItemModel` | Currently selected size option item                                          | `null`  |

## Registering a custom `<MenuItemSizeSelection />`

The `RegistryLoader` will look for a component registered at `components.registry.MenuItemSizeSelection` and expects the key `import` to return a function that uses dynamic import syntax.
