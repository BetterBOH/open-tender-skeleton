# `<RadioSelectButton />`

This component is used to make a selection with a radio button.

## Available Props

| Prop           | PropType   | Description                                                                                    | Default  |
| -------------- | ---------- | ---------------------------------------------------------------------------------------------- | -------- |
| `className`    | `string`   | Classes to be added to the rendered `button` class list                                        | `null`   |
| `text`         | `string`   | Text for the `RadioSelectButton`                                                               | `''`     |
| `labelBold`    | `string`   | Bold label for the `RadioSelectButton`                                                         | `''`     |
| `labelRegular` | `string`   | Regular label for the `RadioSelectButton`                                                      | `''`     |
| `children`     | `nodeList` | Elements to be displayed, i.e. an image, in place of an icon of the button text's first letter | `null`   |
| `isSelected`   | `bool`     | Shows whether or not the `RadioSelectButton` is selected                                       | `false`  |
| `onClick`      | `func`     | Callback that will run when an `onclick` event occurs                                          | `f => f` |

## Registering a custom `<RadioSelectButton />`

The `RegistryLoader` will look for a component registered at `components.registry.RadioSelectButton` and expects the key `import` to return a function that uses dynamic import syntax.
