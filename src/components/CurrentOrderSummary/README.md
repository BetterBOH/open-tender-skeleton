# `<CurrentOrderSummary />`

This component is used to show a summary of the current order with order controls.

Note: The order control buttons currently do not have functionality. It is not connected with any other components, as more thought needs to be put into when and how it is to be used.

## Available Props

| Prop              | PropType        | Description                                                         | Default  |
| ----------------- | --------------- | ------------------------------------------------------------------- | -------- |
| `lineItems`       | `array`         | List of line items in the current order (Open Tender LineItemModel) | `[]`     |
| `currentLocation` | `LocationModel` | Open Tender Location Model                                          | `{}`     |
| `currentOrder`    | `OrderModel`    | Open Tender Order Model                                             | `{}`     |
| `setSideCurtain`  | `func`          | Callback that sets the side curtain                                 | `f => f` |
| `location`        | `object`        | Location object from React Router DOM's `withRouter`                | `null`   |

## Registering a custom `<CurrentOrderSummary />`

The `RegistryLoader` will look for a component registered at `components.CurrentOrderSummary` and expects the key `import` to return a function that uses dynamic import syntax.
