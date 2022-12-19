import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ option }) => {
    return <ul clasNamme={css.list}>
             <li></li>
             <li></li>
             <li></li>
           </ul>
}

Statistics.propTypes = {
    option: PropTypes.string,
}

export default Statistics;