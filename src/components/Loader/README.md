# `<Loader />`

This component contains a full-screen loading overlay with a spinner. It can be used as fallback for `React.Suspense`.

## Registering a custom `<Loader />`

The `RegistryLoader` will look for a component registered at `components.Loader` and expects the key `import` to return a function that uses dynamic import syntax.
