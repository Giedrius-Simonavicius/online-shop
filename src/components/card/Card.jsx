function Card({ children, flex, width }) {
  const flexClass = flex === 'flex' ? 'flex' : 'flex-col';

  return <div className={`ml-3 mr-3 ${flexClass} `}>{children}</div>;
}

export default Card;
