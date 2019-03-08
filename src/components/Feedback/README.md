# `<Feedback />`

This component allows the user to rate an order with an optional comment.

## Registering a custom `<Feedback />`

The `RegistryLoader` will look for a component registered at `components.registry.Feedback` and expects the key `import` to return a function that uses dynamic import syntax.
