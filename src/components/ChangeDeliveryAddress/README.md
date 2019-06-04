# `<ChangeDeliveryAddress />`

This component houses the links to change delivery/catering address and view current menu.

## Available Props

| Prop              | PropType        | Description                                         | Default  |
| ----------------- | --------------- | --------------------------------------------------- | -------- |
| `onClose`         | `func`          | Function that runs when the links are clicked       | `f => f` |
| `history`         | `object`        | History object from React Router DOM's `withRouter` |          |
| `currentLocation` | `LocationModel` | Open Tender location                                | `{}`     |

## Registering a custom `<ChangeDeliveryAddress />`

The `RegistryLoader` will look for a component registered at `components.registry.ChangeDeliveryAddress` and expects the key `import` to return a function that uses dynamic import syntax.
