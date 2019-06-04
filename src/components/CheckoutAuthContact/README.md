# `<CheckoutAuthContact />`

This component shows an authenticated user's contact info on the checkout page.

## Available Props

| Prop       | PropType        | Description         | Default |
| ---------- | --------------- | ------------------- | ------- |
| `customer` | `CustomerModel` | OpenTender customer | `null`  |

## Registering a custom `<CheckoutAuthContact />`

The `RegistryLoader` will look for a component registered at `components.registry.CheckoutAuthContact` and expects the key `import` to return a function that uses dynamic import syntax.
