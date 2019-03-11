# `<FavoriteItem />`

This component is used to show a favorite item.

## Available Props

| Prop       | PropType | Description                     | Default |
| ---------- | -------- | ------------------------------- | ------- |
| `favorite` | `object` | Favorite object from OpenTender | `null`  |

## Registering a custom `<FavoriteItem />`

The `RegistryLoader` will look for a component registered at `components.registry.FavoriteItem` and expects the key `import` to return a function that uses dynamic import syntax.
