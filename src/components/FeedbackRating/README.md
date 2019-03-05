# `<FeedbackRating />`

This component lets a user select a numeric rating for a specific order.

## Available Props

| Prop                      | PropType | Description                                                         | Default  |
| ------------------------- | -------- | ------------------------------------------------------------------- | -------- |
| `rating`                  | `number` | Numeric rating set by the user for an order (lowest: 1, highest: 5) | `0`      |
| `handleRatingClick`       | `func`   | Callback that will run when the `Rating` component is clicked       | `f => f` |
| `handleSetRating`         | `func`   | Callback that will run when the confirm button is clicked           | `f => f` |
| `confirmButtonIsDisabled` | `bool`   | Boolean that indicates whether or not to disable the confirm button | `true`   |
| `handleClearRating`       | `func`   | Callback that will run when the `Close` button is clicked           | `f => f` |

## Registering a custom `<FeedbackRating />`

The `RegistryLoader` will look for a component registered at `components.registry.FeedbackRating` and expects the key `import` to return a function that uses dynamic import syntax.
