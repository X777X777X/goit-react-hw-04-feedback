import PropTypes from 'prop-types';
import css from './Container.module.css';

function Container({ children }) {
  const {container} = css;

  return <div className={container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
