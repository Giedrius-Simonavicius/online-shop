import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Card({ children, flex, width, hover }) {
  const flexClass = flex === 'flex' ? 'flex' : 'flex-col';
  const hoverClass = hover !== '' ? hover : '';

  return (
    <Link className={`ml-3 mr-3 ${width} ${flexClass} ${hoverClass} `}>
      {children}
    </Link>
  );
}
Card.propTypes = {
  children: PropTypes.node,
  flex: PropTypes.oneOf(['flex', 'flex-col']),
  width: PropTypes.string,
  hover: PropTypes.string,
};
export default Card;
