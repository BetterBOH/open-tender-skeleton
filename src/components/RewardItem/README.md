# `<RewardItem />`

This component is used to show a customer's rewards.

## Available Props

| Prop     | PropType | Description        | Default |
| -------- | -------- | ------------------ | ------- |
| `reward` | `Reward` | RewardModel object | null    |

## Registering a custom `<Rewards />`

The `RegistryLoader` will look for a component registered at `components.registry.RewardItem` and expects the key `import` to return a function that uses dynamic import syntax.
