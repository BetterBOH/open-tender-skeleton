import React from 'react';
import { Status } from 'brandibble-redux';
import { Text, TextField, ConfirmButtons } from 'components';
import get from 'utils/get';
import InputTypes from 'constants/InputTypes';

const AccountDetailsEditPassword = React.memo(
  ({
    password,
    confirmPassword,
    updateUserStatus,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleSubmit,
    handleCancel,
    errors,
    localesContext
  }) => (
    <div className="AccountDetailsEditPhone py1">
      <div className="px1 mt_5 mb1_5">
        <Text size="cta" className="text-bold color-black">
          {localesContext.Language.t('dashboard.account.editPassword')}
        </Text>
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <div className="px1 mb1_5">
          <TextField
            label={localesContext.Language.t(
              'dashboard.account.placeholders.password'
            )}
            placeholder={localesContext.Language.t(
              'dashboard.account.placeholders.password'
            )}
            type="password"
            value={password}
            onChange={handleChangePassword}
            errors={
              get(errors, InputTypes.PASSWORD)
                ? [get(errors, InputTypes.PASSWORD)]
                : []
            }
          />
        </div>
        <div className="px1 mb1_5">
          <TextField
            label={localesContext.Language.t(
              'dashboard.account.placeholders.confirmPassword'
            )}
            placeholder={localesContext.Language.t(
              'dashboard.account.placeholders.confirmPassword'
            )}
            type="password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            errors={
              get(errors, 'confirmPassword')
                ? [get(errors, 'confirmPassword')]
                : []
            }
          />
        </div>
        <ConfirmButtons
          disabledConfirmButtonColor="gray"
          confirmButtonText={
            updateUserStatus === Status.PENDING
              ? localesContext.Language.t('dashboard.account.loading')
              : localesContext.Language.t('dashboard.account.update')
          }
          confirmButtonIsDisabled={updateUserStatus === Status.PENDING}
          handleConfirm={handleSubmit}
          handleCancel={handleCancel}
        />
      </form>
    </div>
  )
);

export default AccountDetailsEditPassword;
