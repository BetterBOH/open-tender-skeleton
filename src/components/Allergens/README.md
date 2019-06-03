# `<Allergens />`

This component allows authenticated users to add and remove allergens listed on their accounts.

## Available Props

| Prop                  | PropType | Description                                                                                                | Default  |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------------------- | -------- |
| `allergens`           | `object` | Object of available allergens on Open Tender                                                               | `null`   |
| `userAllergens`       | `array`  | Array of allergens listed on the user's account                                                            | `[]`     |
| `handleAllergenClick` | `func`   | Callback that runs when an allgergen is clicked, conditionally adds or removes an allergen from an account | `f => f` |

## Registering a custom `<Allergens />`

The `RegistryLoader` will look for a component registered at `components.registry.Allergens` and expects the key `import` to return a function that uses dynamic import syntax.
