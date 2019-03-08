# `<Button />`

This component is used for rendering buttons.

## Available Props

| Prop                | PropType   | Description                                             | Default  |
| ------------------- | ---------- | ------------------------------------------------------- | -------- |
| `children`          | `nodeList` | Elements to be rendered inside `button` tags            | `null`   |
| `className`         | `string`   | Classes to be added to the rendered `button` class list | `null`   |
| `variant`           | `string`   | Variant of the button to be rendered                    | no-style |
| `onClick`           | `func`     | Callback that runs when the button is clicked           | `f => f` |
| `text`              | `string`   | Text to be rendered on the button                       | `null`   |
| `type`              | `string`   | Specifies the type attribute of the button              | button   |
| `to`                | `string`   | Anchor path to render                                   | `null`   |
| `disabledClassName` | `string`   | Classes used when the button is disabled                | disabled |
| `isDisabled`        | `bool`     | Indicates when the button should be disabled            | `false`  |

## Registering a custom `<Button />`

The `RegistryLoader` will look for a component registered at `components.registry.Button` and expects the key `import` to return a function that uses dynamic import syntax.
