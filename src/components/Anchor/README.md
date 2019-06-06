# `<Anchor />`

This component is used for rendering links.

## Available Props

| Prop        | PropType   | Description                                              | Default |
| ----------- | ---------- | -------------------------------------------------------- | ------- |
| `url`       | `string`   | Anchor path to render                                    | `''`    |
| `children`  | `nodeList` | Elements to be rendered inside `a` tags                  | `null`  |
| `className` | `string`   | Classes to be added to the rendered `a` class list       | `''`    |
| `style`     | `object`   | Object of styles for the rendered `a`'s `style` property | `null`  |

## Registering a custom `<Anchor />`

The `RegistryLoader` will look for a component registered at `components.registry.Anchor` and expects the key `import` to return a function that uses dynamic import syntax.
