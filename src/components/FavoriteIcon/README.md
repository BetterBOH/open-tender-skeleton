# `<FavoriteIcon>`

This component displays whether an item is a favorite.

## Available Props

| Prop              | PropType        | Description                         | Default         |
| ----------------- | --------------- | ----------------------------------- | --------------- |
| `itemIsFavorited` | `bool`          | Indicates if item is a favorite     | `false`         |
| `menuItemId`      | `number`        | The id of the menu item             | `null`          |
| `item`            | `LineItemModel` | A raw item before it is a line item | `LineItemModel` |
| `favoriteId`      | `number`        | ID of the favorite if is favorited  | `null`          |

## Registering a custom `<FavoriteIcon />`

The `RegistryLoader` will look for a component registered at `components.registry.FavoriteIcon` and expects the key `import` to return a function that uses dynamic import syntax.
