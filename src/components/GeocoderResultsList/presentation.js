import React, { Component, createRef, Suspense } from 'react';
import { Spinner, GeocoderResultsListItem } from 'components';
import { KeyCodes } from 'constants/Accessibility';
import get from 'utils/get';
import times from 'utils/times';

class GeocoderResultsList extends Component {
  state = {
    currentlyFocusedItem: -1
  };

  constructor() {
    super(...arguments);

    this.listItemRefs = times(5, createRef);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.updateCurrentListItem);
    window.addEventListener('click', this.resetCurrentlyFocusedItem);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.updateCurrentListItem);
    window.removeEventListener('click', this.resetCurrentlyFocusedItem);
  }

  resetCurrentlyFocusedItem = () => {
    this.setState({ currentlyFocusedItem: -1 });
  };

  updateCurrentListItem = e => {
    const { keyCode } = e;
    const { currentlyFocusedItem } = this.state;

    if (keyCode !== KeyCodes.UP_ARROW && keyCode !== KeyCodes.DOWN_ARROW) {
      return this.resetCurrentlyFocusedItem();
    } else {
      if (this.props.options.length) e.preventDefault();
    }

    if (keyCode === KeyCodes.UP_ARROW) {
      if (currentlyFocusedItem < 0) return null;

      const previousItem = currentlyFocusedItem - 1;

      return this.focusCurrentListItem(previousItem);
    }

    if (keyCode === KeyCodes.DOWN_ARROW) {
      if (currentlyFocusedItem >= this.listItemRefs.length) return null;

      const nextItem = currentlyFocusedItem + 1;

      return this.focusCurrentListItem(nextItem);
    }
  };

  focusCurrentListItem = currentlyFocusedItem => {
    const focusableElem = get(
      this,
      `listItemRefs[${currentlyFocusedItem}].current`
    );

    if (!focusableElem) return null;

    focusableElem.focus();
    return this.setState({ currentlyFocusedItem });
  };

  render() {
    const { options, onSelect } = this.props;

    if (!options.length) return null;

    return (
      <ul className="GeocoderResultsList w100 z-1 shadow-sm">
        <Suspense
          fallback={
            <Suspense fallback={null}>
              <Spinner />
            </Suspense>
          }
        >
          {options.map((option, i) => {
            return (
              <GeocoderResultsListItem
                elemRef={this.listItemRefs[i]}
                key={option.id}
                option={option}
                onSelect={onSelect}
              />
            );
          })}
        </Suspense>
      </ul>
    );
  }
}

export default GeocoderResultsList;
