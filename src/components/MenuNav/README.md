# `<MenuNav />`

This component is used in the menu to navigate between sections and filter by allergens/flavors.

## Available Props

| Prop             | PropType | Description                                                            | Default |
| ---------------- | -------- | ---------------------------------------------------------------------- | ------- |
| `menuCategories` | `array`  | Array of menu category objects containing id, name, and slug from OT   | `[]`    |
| `menuType`       | `string` | Menu type based on the menu daypart from OT (i.e. lunch, dinner, etc.) | `""`    |

## Registering a custom `<MenuNav />`

The `RegistryLoader` will look for a component registered at `components.registry.MenuNav` and expects the key `import` to return a function that uses dynamic import syntax.
