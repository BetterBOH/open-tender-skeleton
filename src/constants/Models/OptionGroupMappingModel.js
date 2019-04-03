import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  additionalOptionsCount: PropTypes.number,
  canAddMoreToThisGroup: PropTypes.bool,
  currentlySelectedcount: PropTypes.number,
  extraOptionsWillIncurCost: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
  optionGroupData: PropTypes.object, // TO-DO: import an OptionGroupData model and extend props here
  optionItems: PropTypes.array, // TO-DO: import an OptionItem model and extend props here
  remainingIncludedOptions: PropTypes.number,
  requiresMoreInThisGroup: PropTypes.bool,
  totalAllowedCount: PropTypes.number,
  totalEffectOnPrice: PropTypes.string
});

const defaultProps = null;

export default { propTypes, defaultProps };
