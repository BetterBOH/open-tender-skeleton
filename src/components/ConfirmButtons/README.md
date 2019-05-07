# `<ConfirmButtons />`

This component is a set of two buttons-- the larger one (with a disabled option) for confirmation and the smaller one on the right for cancellation.

## Available Props

| Prop                         | PropType | Description                                               | Default     |
| ---------------------------- | -------- | --------------------------------------------------------- | ----------- |
| `confirmButtonColor`         | `string` | Color of the confirm button                               | `black`     |
| `disabledConfirmButtonColor` | `string` | Color of the confirm button when it is disabled           | `gray-dark` |
| `confirmButtonIsDisabled`    | `bool`   | Describes whether the confirm button should be disabled   | `false`     |
| `confirmButtonText`          | `string` | Text on the confirm button                                | `Continue`  |
| `handleConfirm`              | `func`   | Callback that will run when the confirm button is clicked | `f => f`    |
| `cancelButtonColor`          | `string` | Color of the cancel button                                | `gray`      |
| `cancelButtonIconColor`      | `string` | Color of the cancel button's icon                         | `white`     |
| `cancelButtonIcon`           | `string` | Icon on the cancel button                                 | `Close`     |
| `handleCancel`               | `func`   | Callback that will run when the cancel button is clicked  | `f => f`    |

## Registering a custom `<ConfirmButtons />`

The `RegistryLoader` will look for a component registered at `components.registry.ConfirmButtons` and expects the key `import` to return a function that uses dynamic import syntax.
