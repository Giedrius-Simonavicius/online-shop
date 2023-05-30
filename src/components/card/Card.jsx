function Card({ children, flex, width, hover }) {
  const flexClass = flex === 'flex' ? 'flex' : 'flex-col';
  const hoverClass = hover !== '' ? hover : '';

  return (
    <div className={`ml-3 mr-3 ${flexClass} ${hoverClass} `}>{children}</div>
  );
}

export default Card;
