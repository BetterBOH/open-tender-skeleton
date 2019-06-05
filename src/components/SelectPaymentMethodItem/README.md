# `<SelectPaymentMethodItem />`

This component renders individual items for the `SelectPaymentMethod` component, i.e. `ADD_PAYMENT_METHOD` or a user's payment methods.

## Available Props

| Prop                 | PropType             | Description                                                   | Default  |
| -------------------- | -------------------- | ------------------------------------------------------------- | -------- |
| `id`                 | `number` or `string` | Required item identifier (payment ID or `ADD_PAYMENT_METHOD`) | `''`     |
| `isAddPaymentMethod` | `bool`               | Renders the `ADD_PAYMENT_METHOD` option if set to `true`      | `false`  |
| `isSelected`         | `bool`               | Indicates whether the item is selected                        | `false`  |
| `paymentMethod`      | `PaymentModel`       | Open Tender Payment Model                                     | `null`   |
| `onSelect`           | `func`               | Callback that runs when the item is selected                  | `f => f` |

## Registering a custom `<SelectPaymentMethodItem />`

The `RegistryLoader` will look for a component registered at `components.registry.SelectPaymentMethodItem` and expects the key `import` to return a function that uses dynamic import syntax.
