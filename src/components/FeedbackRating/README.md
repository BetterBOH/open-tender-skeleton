# `<FeedbackRating />`

This component allows the user to rate an order.

## Available Props

| Prop      | PropType | Description                                   | Default |
| --------- | -------- | --------------------------------------------- | ------- |
| `actions` | `object` | Object containing actions for rating an order | `{}`    |

## Registering a custom `<FeedbackRating />`

The `RegistryLoader` will look for a component registered at `components.registry.FeedbackRating` and expects the key `import` to return a function that uses dynamic import syntax.
