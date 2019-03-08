# `<LinkButton />`

This component is used for rendering buttons with links and optional icons to the left and/or right of the button text.

## Available Props

| Prop            | PropType   | Description                                                    | Default   |
| --------------- | ---------- | -------------------------------------------------------------- | --------- |
| `className`     | `string`   | Classes to be added to the rendered `button` class list        | `null`    |
| `children`      | `nodeList` | Elements to be rendered inside the rendered `button` component | `null`    |
| `iconLeft`      | `string`   | Name of the icon to the left of the button text                | `null`    |
| `iconLeftFill`  | `string`   | Color of the icon to the left of the button text               | grayLight |
| `iconRight`     | `string`   | Name of the icon to the right of the button text               | Right     |
| `iconRightFill` | `string`   | Color of the icon to the right of the button text              | grayLight |
| `onClick`       | `func`     | Callback that runs when the button is clicked                  | `f => f`  |
| `text`          | `string`   | Text for the button                                            | `null`    |
| `to`            | `string`   | Anchor path to render                                          | `null`    |
| `variant`       | `string`   | Variant of the button                                          | primary   |

## Registering a custom `<LinkButton />`

The `RegistryLoader` will look for a component registered at `components.registry.LinkButton` and expects the key `import` to return a function that uses dynamic import syntax.
