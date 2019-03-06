# `<Favorites />`

This component is used to show a customer's favorites.

## Available Props

| Prop        | PropType | Description                                       | Default |
| ----------- | -------- | ------------------------------------------------- | ------- |
| `favorites` | `array`  | An array of FavoriteModel objects from OpenTender | `null`  |

## Registering a custom `<Favorites />`

The `RegistryLoader` will look for a component registered at `components.registry.Favorites` and expects the key `import` to return a function that uses dynamic import syntax.
