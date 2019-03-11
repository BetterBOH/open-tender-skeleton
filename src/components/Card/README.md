# `<Card />`

This component is a card that displays info.

## Available Props

| Prop        | PropType   | Description                                          | Default |
| ----------- | ---------- | ---------------------------------------------------- | ------- |
| `variant`   | `string`   | Variant of the card used to override default styles  | `null`  |
| `className` | `string`   | Classes to be added to the rendered `div` class list | `''`    |
| `children`  | `nodeList` | Elements to be rendered inside the card              | `null`  |

## Registering a custom `<Card />`

The `RegistryLoader` will look for a component registered at `components.registry.Card` and expects the key `import` to return a function that uses dynamic import syntax.
