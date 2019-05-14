import React from 'react';
import { Status } from 'brandibble-redux';
import { Text, TextField, ConfirmButtons } from 'components';
import get from 'utils/get';
import InputTypes from 'constants/InputTypes';

const AccountDetailsEditEmail = React.memo(
  ({
    customerAttributes,
    updateUserStatus,
    handleChange,
    handleSubmit,
    handleCancel,
    errors,
    localesContext
  }) => (
    <div className="AccountDetailsEditEmail py1">
      <div className="px1 mt_5 mb1_5">
        <Text size="cta" className="text-bold color-black">
          {localesContext.Language.t('dashboard.account.editEmail')}
        </Text>
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <div className="px1 mb1_5">
          <TextField
            label={localesContext.Language.t(
              'dashboard.account.placeholders.email'
            )}
            placeholder={localesContext.Language.t(
              'dashboard.account.placeholders.email'
            )}
            value={get(customerAttributes, InputTypes.EMAIL)}
            onChange={handleChange}
            errors={
              get(errors, InputTypes.EMAIL)
                ? [get(errors, InputTypes.EMAIL)]
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
            !get(customerAttributes, InputTypes.EMAIL) ||
            updateUserStatus === Status.PENDING
          }
          handleConfirm={handleSubmit}
          handleCancel={handleCancel}
        />
      </form>
    </div>
  )
);

export default AccountDetailsEditEmail;
