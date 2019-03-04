# `<FeedbackComment />`

This component lets a user submit a comment with a numeric rating associated with a specific order.

## Available Props

| Prop                   | PropType | Description                                                         | Default  |
| ---------------------- | -------- | ------------------------------------------------------------------- | -------- |
| `comment`              | `string` | Comment that is being composed as part of the feedback              | `''`     |
| `submitFeedback`       | `func`   | Callback that will run when the `Submit Feedback` button is clicked | `f => f` |
| `handleUnsetRating`    | `func`   | Callback that will run when the `Back` button is clicked            | `f => f` |
| `handleTextAreaChange` | `func`   | Callback that will run when there is a change in the text area      | `f => f` |

## Registering a custom `<FeedbackComment />`

The `RegistryLoader` will look for a component registered at `components.registry.FeedbackComment` and expects the key `import` to return a function that uses dynamic import syntax.
