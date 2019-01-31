import cx from 'classnames';
import React from 'react';

import { Anchor, Image, Text } from 'components';

const Footer = React.memo(
  ({ backgroundColor, textColor, logoImage, links, openTenderLogo }) => {
    return (
      <div
        className={cx('Footer none md:flex flex-wrap w100 p1 relative none', {
          'bg-color-black': !backgroundColor
        })}
        style={backgroundColor ? { backgroundColor } : null}
      >
        <div className="Footer__logo">
          <Image src={logoImage} />
        </div>
        <div className="Footer__links">
          {links.map(link => (
            <Anchor className="Footer__links__link" url={link.url}>
              {link.name}
            </Anchor>
          ))}
        </div>
        <div className="Footer__powered-by flex flex-column">
          <Text
            size="details"
            className={cx({
              'color-white': !textColor && !backgroundColor
            })}
            style={textColor ? { color: textColor } : null}
          >
            Powered By
          </Text>
          <Image src={openTenderLogo} alt="Open Tender Logo." />
        </div>
      </div>
    );
  }
);

export default Footer;
