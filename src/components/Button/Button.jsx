import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ option }) => {
    return <button clasNamme={css.button} type='button'>{ option }</button>
}

Button.propTypes = {
    option: PropTypes.string,
}

export default Button;