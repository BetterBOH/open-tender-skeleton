# `<Anchor />`

This component is used for rendering links.

## Available Props

| Prop              | PropType   | Description                                              | Default |
| ----------------- | ---------- | -------------------------------------------------------- | ------- |
| `url`             | `string`   | Anchor path to render                                    | `null`  |
| `children`        | `nodeList` | Elements to be rendered inside `a` tags                  | `null`  |
| `className`       | `string`   | Classes to be added to the rendered `a` class list       | `null`  |
| `style`           | `object`   | Object of styles to supply to the rendered `a` as a prop | `null`  |
| `linksIsEnternal` | `bool`     | Returns a link that opens in another window or tab       | `false` |

## Registering a custom `<Anchor />`

The `RegistryLoader` will look for a component registered at `components.registry.Anchor` and expects the key `import` to return a function that uses dynamic import syntax.
