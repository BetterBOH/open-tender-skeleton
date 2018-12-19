import React, { Component } from 'react';
import { defaultConfig, ConfigContext } from '../../config.js';

import Text from '../Text';

export default class extends Component {
  render() {
    this.config = Object.assign({}, defaultConfig, this.props.config);

    return (
      <ConfigContext.Provider value={this.config}>
        <div className="Skeleton">
          <Text elem="h1">Hello, World!</Text>
        </div>
      </ConfigContext.Provider>
    );
  }
}
