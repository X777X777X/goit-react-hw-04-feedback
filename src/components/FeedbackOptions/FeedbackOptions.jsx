import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
  const { btn } = css;

    return options.map(option => (
      <button
        type="button"
        className={`${btn} ${css[option.toLowerCase()]}`}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;