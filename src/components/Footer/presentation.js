import cx from 'classnames';
import React from 'react';

import { Anchor, Image, Text } from 'components';

const Footer = React.memo(
  ({ backgroundColor, textColor, logoImage, links, openTenderLogo }) => (
    <div
      className={cx(
        'Footer none md:flex flex-wrap items-center w100 px3 py6 relative none',
        {
          'bg-color-black': !backgroundColor
        }
      )}
      style={backgroundColor ? { backgroundColor } : null}
    >
      <div className="Footer__logo col-2">
        <Image src={logoImage} className="md:col-8 lg:col-6" />
      </div>
      <div className="Footer__links col-7 flex justify-around px2">
        {links.map(link => (
          <Anchor
            className="Footer__links__link"
            url={link.url}
            style={textColor ? { color: textColor } : null}
          >
            {link.name}
          </Anchor>
        ))}
      </div>
      <div className="Footer__powered-by col-3">
        <Text
          size="detail"
          className={cx('uppercase text-bold mb2 letter-spacing-md', {
            'color-black': !textColor && !backgroundColor
          })}
          style={textColor ? { color: textColor } : null}
        >
          Powered By
        </Text>
        <Image
          src={openTenderLogo}
          alt="Open Tender Logo."
          className="w100 height-auto"
        />
      </div>
    </div>
  )
);

export default Footer;
