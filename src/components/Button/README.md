# `<Button />`

This component is used for rendering buttons.

## Available Props

| Prop                | PropType   | Description                                                 | Default  |
| ------------------- | ---------- | ----------------------------------------------------------- | -------- |
| `className`         | `string`   | Classes to be added to the rendered `button` class list     | `null`   |
| `variant`           | `string`   | Variant of the button to be rendered                        | no-style |
| `children`          | `nodeList` | Elements to be rendered inside `button` tags                | `null`   |
| `text`              | `string`   | Text to be rendered on the button                           | `null`   |
| `onClick`           | `func`     | Callback that runs when the button is clicked               | `f => f` |
| `to`                | `string`   | Anchor path to render                                       | `null`   |
| `type`              | `string`   | Specifies `type` attribute of the button                    | button   |
| `ariaLabel`         | `string`   | ARIA label for anchor tag                                   | `''`     |
| `anchorTitle`       | `string`   | Specifies `title` attribute of anchor tag for accessibility | `''`     |
| `isDisabled`        | `bool`     | Indicates when the button should be disabled                | `false`  |
| `disabledClassName` | `string`   | Classes used when the button is disabled                    | disabled |

## Registering a custom `<Button />`

The `RegistryLoader` will look for a component registered at `components.registry.Button` and expects the key `import` to return a function that uses dynamic import syntax.
