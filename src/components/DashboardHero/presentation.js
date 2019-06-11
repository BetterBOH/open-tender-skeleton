import React from 'react';
import get from 'utils/get';

import { HeroImage, Text } from 'components';

const DashboardHero = React.memo(
  ({ customer, brandContext, localesContext }) => (
    <div className="DashboardHero relative">
      <HeroImage
        src={get(brandContext, 'backgroundImage')}
        className="md:none"
      />
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
