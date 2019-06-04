# `<BelowDeliveryMinimum />`

This component is used to inform a user that the items in their cart do not meet the delivery minimum.

## Available Props

| Prop                | PropType        | Description                                         | Default  |
| ------------------- | --------------- | --------------------------------------------------- | -------- |
| `handleAcceptClick` | `func`          | Callback that will run when a user clicks accept    | `f => f` |
| `actions`           | `object`        | Object containing resetModal action from redux      |          |
| `history`           | `object`        | History object from React Router DOM's `withRouter` |          |
| `currentLocation`   | `LocationModel` | Open Tender location                                | `{}`     |

## Registering a custom `<BelowDeliveryMinimum />`

The `RegistryLoader` will look for a component registered at `components.registry.BelowDeliveryMinimum` and expects the key `import` to return a function that uses dynamic import syntax.
