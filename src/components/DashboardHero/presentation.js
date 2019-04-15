import React from 'react';
import get from 'utils/get';

import { HeroImage, Text, Icon } from 'components';

const DashboardHero = React.memo(
  ({ customer, brandContext, localesContext }) => (
    <div className="DashboardHero relative">
      <HeroImage src={get(brandContext, 'backgroundImage')} />
      <div className="DashboardHero__icon-container absolute w100 flex justify-center">
        <div className="bg-color-white shadow-md circle">
          <Icon className="DashboardHero__icon shadow-md" icon="UserCircle" />
        </div>
      </div>
      <div className="DashboardHero__text-block col-12 bg-color-white text-center z1 py1_5">
        <Text size="headline" className="block my1">
          {!!get(customer, 'first_name', '')
            ? `${localesContext.Language.t('dashboard.welcomeBack')}, ${get(
                customer,
                'first_name'
              )}!`
            : `${localesContext.Language.t('dashboard.welcomeBack')}!`}
        </Text>
        <Text size="description" className="block color-gray-dark">
          {localesContext.Language.t('dashboard.adlib')}
        </Text>
      </div>
    </div>
  )
);

export default DashboardHero;
