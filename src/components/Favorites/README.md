# `<Favorites />`

This component is used to show a customer's favorites.

## Available Props

| Prop         | PropType | Description                                       | Default                                     |
| ------------ | -------- | ------------------------------------------------- | ------------------------------------------- |
| `favorites`  | `array`  | An array of FavoriteModel objects from OpenTender | `null`                                      |
| `headerText` | `string` | The header text                                   | `Your Favorites`                            |
| `subtitle`   | `string` | The text below the header                         | `You know you want it. Don't deny yourself` |

headerText
subtitle

## Registering a custom `<Favorites />`

The `RegistryLoader` will look for a component registered at `components.registry.Favorites` and expects the key `import` to return a function that uses dynamic import syntax.
