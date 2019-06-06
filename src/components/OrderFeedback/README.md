# `<OrderFeedback />`

This component is used to leave a rating and comment for a completed order.

## Available Props

| Prop                 | PropType             | Description                                           | Default |
| -------------------- | -------------------- | ----------------------------------------------------- | ------- |
| `openTenderRef`      | `OpenTenderRefModel` | Open Tender Ref Model                                 | `null`  |
| `order`              | `OrderModel`         | Open Tender Order Model                               | `{}`    |
| `ratings`            | `object`             | Object of ratings submitted by the authenticated user | `null`  |
| `createRatingStatus` | `string`             | createRating status from Open Tender                  | IDLE    |
| `updateRatingStatus` | `string`             | updateRating status from Open Tender                  | IDLE    |
| `fetchRatingStatus`  | `string`             | fetchRating status from Open Tender                   | IDLE    |
| `createRatingError`  | `string`             | createRating error from Open Tender                   | `null`  |
| `updateRatingError`  | `string`             | updateRating error from Open Tender                   | `null`  |
| `actions`            | `object`             | Object containing actions from Open Tender and redux  |         |

## Registering a custom `<OrderFeedback />``

The `RegistryLoader` will look for a component registered at `components.OrderFeedback` and expects the key `import` to return a function that uses dynamic import syntax.
