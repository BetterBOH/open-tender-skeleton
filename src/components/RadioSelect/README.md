# `<RadioSelect />`

This component is used to make a selection with a radio button.

## Available Props

| Prop           | PropType | Description                                                  | Default  |
| -------------- | -------- | ------------------------------------------------------------ | -------- |
| `className`    | `string` | Classes to be added to the rendered `RadioSelect` class list | `null`   |
| `imageUrl`     | `string` | Image for the `RadioSelect`                                  | `null`   |
| `text`         | `string` | Text for the `RadioSelect`                                   | `''`     |
| `labelBold`    | `string` | Bold label for the `RadioSelect`                             | `''`     |
| `labelRegular` | `string` | Regular label for the `RadioSelect`                          | `''`     |
| `onClick`      | `func`   | Callback that will run when an `onclick` event occurs        | `f => f` |
| `isSelected`   | `bool`   | Shows whether or not the `RadioSelect` is active             | `false`  |

## Registering a custom `<RadioSelect />`

The `RegistryLoader` will look for a component registered at `components.registry.RadioSelect` and expects the key `import` to return a function that uses dynamic import syntax.
