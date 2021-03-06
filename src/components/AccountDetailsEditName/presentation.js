import React from 'react';
import { Status } from 'brandibble-redux';
import { Text, TextField, ConfirmButtons } from 'components';
import get from 'utils/get';
import InputTypes from 'constants/InputTypes';

const AccountDetailsEditName = React.memo(
  ({
    customerAttributes,
    updateUserStatus,
    handleChange,
    handleSubmit,
    handleCancel,
    errors,
    localesContext
  }) => (
    <div className="AccountDetailsEditName py1">
      <div className="px1 mt_5 mb1_5">
        <Text size="cta" className="text-bold color-black">
          {localesContext.Language.t('dashboard.account.editName')}
        </Text>
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <div className="px1 mb1_5">
          <TextField
            className="mb_5"
            label={localesContext.Language.t(
              'dashboard.account.placeholders.firstName'
            )}
            placeholder={localesContext.Language.t(
              'dashboard.account.placeholders.firstName'
            )}
            value={get(customerAttributes, InputTypes.FIRST_NAME)}
            onChange={value => handleChange(InputTypes.FIRST_NAME, value)}
            errors={
              get(errors, InputTypes.FIRST_NAME)
                ? [get(errors, InputTypes.FIRST_NAME)]
                : null
            }
          />
          <TextField
            label={localesContext.Language.t(
              'dashboard.account.placeholders.lastName'
            )}
            placeholder={localesContext.Language.t(
              'dashboard.account.placeholders.lastName'
            )}
            value={get(customerAttributes, InputTypes.LAST_NAME)}
            onChange={value => handleChange(InputTypes.LAST_NAME, value)}
            errors={
              get(errors, InputTypes.LAST_NAME)
                ? [get(errors, InputTypes.LAST_NAME)]
                : null
            }
          />
        </div>
        <ConfirmButtons
          confirmButtonText={
            updateUserStatus === Status.PENDING
              ? localesContext.Language.t('dashboard.account.loading')
              : localesContext.Language.t('dashboard.account.update')
          }
          confirmButtonIsDisabled={
            !get(customerAttributes, InputTypes.FIRST_NAME) ||
            !get(customerAttributes, InputTypes.LAST_NAME) ||
            updateUserStatus === Status.PENDING
          }
          handleConfirm={handleSubmit}
          handleCancel={handleCancel}
        />
      </form>
    </div>
  )
);

export default AccountDetailsEditName;
