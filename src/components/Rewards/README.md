# `<Rewards />`

This component is used to show a customer's rewards.

## Available Props

| Prop      | PropType | Description           | Default |
| --------- | -------- | --------------------- | ------- |
| `rewards` | `array`  | Array of RewardModels | []      |

## Test Props

| Prop              | PropType | Description     | Default |
| ----------------- | -------- | --------------- | ------- |
| `LocalesProvider` | `object` | LocalesProvider | null    |

## Registering a custom `<Rewards />`

The `RegistryLoader` will look for a component registered at `components.registry.Rewards` and expects the key `import` to return a function that uses dynamic import syntax.
