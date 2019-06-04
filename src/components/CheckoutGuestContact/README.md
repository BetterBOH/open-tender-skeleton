# `<CheckoutAuthContact />`

This component allows a guest user to enter their contact info on the checkout page.

## Available Props

| Prop                       | PropType             | Description                                             | Default  |
| -------------------------- | -------------------- | ------------------------------------------------------- | -------- |
| `customer`                 | `object`             | Object of customer details on current order             | `null`   |
| `openTenderRef`            | `OpenTenderRefModel` | Open Tender Ref Model                                   | `null`   |
| `orderRef`                 | `OrderRefModel`      | Open Tender Order Ref Model                             | `null`   |
| `bindCustomerToOrder`      | `func`               | bindCustomerToOrder action from Open Tender             | `f => f` |
| `orderValidationErrors`    | `array`              | List of order validation error objects from Open Tender | `[]`     |
| `authenticateUser`         | `func`               | authenticateUser action from Open Tender                | `f => f` |
| `authenticateUserStatus`   | `string`             | createAndAuthenticateUser status from Open Tender       | IDLE     |
| `authenticationErrors`     | `array`              | List of errors from `authenticationErrors` selector     | `[]`     |
| `createSystemNotification` | `func`               | createSystemNotification action from redux              | `f => f` |

## Registering a custom `<CheckoutAuthContact />`

The `RegistryLoader` will look for a component registered at `components.registry.CheckoutAuthContact` and expects the key `import` to return a function that uses dynamic import syntax.
