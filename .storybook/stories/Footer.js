import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'state/store';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { Footer } from 'components';
import documentation from 'components/Footer/README.md';

import { logoWhite, logoBlack } from 'assets';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

const brand = {
  backgroundImage:
    'http://tacombi.com/system/uploads/gallery_image/image/40/gallery-events-tacombi-flatiron.jpg',
  logoImage:
    'https://s3.amazonaws.com/betterboh/u/img/prod/51/1509669369_tacombi-logo_500x129.png',
  brandColor: '#68070A',
  textColor: 'white',
  links: [
    {
      name: 'Privacy Policy',
      url: '/privacy-policy'
    },
    {
      name: 'Terms of Use',
      url: '/terms'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    }
  ],
  theme: 'dark'
};

storiesOf('Footer', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <Router history={history}>
      <Route path="/" component={() => story()} />
    </Router>
  ))
  .add(
    'branded',
    () => (
      <React.Suspense fallback={<div />}>
        <Footer
          backgroundColor={brand.brandColor}
          logoImage={brand.logoImage}
          textColor={brand.textColor}
          links={brand.links}
          openTenderLogo={brand.theme === 'dark' ? logoWhite : logoBlack}
        />
      </React.Suspense>
    ),
    addons
  )
  .add(
    'default light',
    () => (
      <React.Suspense fallback={<div />}>
        <Footer
          textColor="black"
          logoImage={brand.logoImage}
          links={brand.links}
          openTenderLogo={logoBlack}
        />
      </React.Suspense>
    ),
    addons
  )
  .add(
    'default dark',
    () => (
      <React.Suspense fallback={<div />}>
        <Footer
          backgroundColor="black"
          textColor="white"
          logoImage={brand.logoImage}
          links={brand.links}
          openTenderLogo={logoWhite}
        />
      </React.Suspense>
    ),
    addons
  );
