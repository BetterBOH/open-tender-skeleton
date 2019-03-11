import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'state/store';
import { storiesOf } from '@storybook/react';

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
  .addDecorator(story => (
    <Router history={history}>
      <Route path="/" component={() => story()} />
    </Router>
  ))
  .add(
    'branded',
    () => (
      <Footer
        backgroundColor={brand.brandColor}
        logoImage={brand.logoImage}
        textColor={brand.textColor}
        links={brand.links}
        openTenderLogo={brand.theme === 'dark' ? logoWhite : logoBlack}
      />
    ),
    addons
  )
  .add(
    'default light',
    () => (
      <Footer
        textColor="black"
        logoImage={brand.logoImage}
        links={brand.links}
        openTenderLogo={logoBlack}
      />
    ),
    addons
  )
  .add(
    'default dark',
    () => (
      <Footer
        backgroundColor="black"
        textColor="white"
        logoImage={brand.logoImage}
        links={brand.links}
        openTenderLogo={logoWhite}
      />
    ),
    addons
  );
