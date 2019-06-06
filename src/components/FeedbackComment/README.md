# `<FeedbackComment />`

This component lets a user submit a comment with a numeric rating associated with a specific order.

## Available Props

| Prop      | PropType | Description                                                                              | Default  |
| --------- | -------- | ---------------------------------------------------------------------------------------- | -------- |
| `data`    | `object` | Data from redux that contains the order's feedback comment and `submitFeedback` callback | `{}`     |
| `onClose` | `func`   | Callback that resets the modal or drawer that houses this component                      | `f => f` |

## Registering a custom `<FeedbackComment />`

The `RegistryLoader` will look for a component registered at `components.registry.FeedbackComment` and expects the key `import` to return a function that uses dynamic import syntax.
