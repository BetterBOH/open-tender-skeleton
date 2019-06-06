# `<CartButton>`

This component is a button that indicates whether the user has items in their cart.

## Available Props

| Prop               | PropType | Description                                             | Default |
| ------------------ | -------- | ------------------------------------------------------- | ------- |
| `className`        | `string` | Classes to be added to the rendered `button` class list | `''`    |
| `icon`             | `string` | Name of svg icon to be rendered in the button           | Bag     |
| `onClick`          | `func`   | Callback that will run when an `onclick` event occurs   | `null`  |
| `currentLineItems` | `array`  | Line items from the current order                       | `[]`    |
| `location`         | `object` | Location object from React Router DOM's `withRouter`    | `null`  |

## Registering a custom `<CartButton />`

The `RegistryLoader` will look for a component registered at `components.registry.CartButton` and expects the key `import` to return a function that uses dynamic import syntax.
