# `<Text />`

This component renders texts.

## Available Props

| Prop        | PropType   | Description                                                       | Default |
| ----------- | ---------- | ----------------------------------------------------------------- | ------- |
| `elem`      | `string`   | Text element to be rendered                                       | span    |
| `children`  | `nodeList` | Elements to be rendered inside the text element                   | `null`  |
| `className` | `string`   | Classes to be added to the rendered text element's class list     | `null`  |
| `size`      | `string`   | Size of the text element                                          | body    |
| `text`      | `string`   | Text to be rendered on the button                                 | `null`  |
| `style`     | `object`   | Object of styles to supply to the rendered text element as a prop | `null`  |

## Registering a custom `<Text />`

The `RegistryLoader` will look for a component registered at `components.registry.Text` and expects the key `import` to return a function that uses dynamic import syntax.
