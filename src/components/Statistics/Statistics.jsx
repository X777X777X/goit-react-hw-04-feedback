import PropTypes from 'prop-types';
import css from './Statistics.module.css'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
     const { list, item } = css;
    return (
        <ul className={list}>
            <li className={item}>Good:{good}</li>
            <li className={item}>Neautral:{neutral}</li>
            <li className={item}>Bad:{bad}</li>
            <li className={item}>Total:{total}</li>
            <li className={item}>Positive feedback:{positivePercentage}%</li>
        </ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;