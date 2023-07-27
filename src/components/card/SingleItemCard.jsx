import { useGeneralCtx } from '../../context/GeneralProvider';
import { calculateDiscountedPrice, formatCurrency } from '../../helperFns';
import PropTypes from 'prop-types';

function SingleItemCard({ flex, hover, product }) {
  const flexClass = flex === 'flex' ? 'flex' : 'flex-col';
  const hoverClass = hover !== '' ? hover : '';
  const { mdScreen } = useGeneralCtx();

  const { renderStars } = useGeneralCtx();
  return (
    <div
      className={`mb-6 ml-3 mr-3 ${flexClass} ${!mdScreen ? hoverClass : ''} `}
    >
      {product.inStock ? (
        <div className="flex gap-2">
          <img loading="lazy" src="../icons/instock.svg" alt="instock" />
          <p className="text-sm text-color9">In stock</p>
        </div>
      ) : (
        <p className="text-sm text-color5">Out of stock</p>
      )}
      <img
        loading="lazy"
        className="mx-auto mb-3 mt-3 flex sm:mx-0"
        key={product.uid}
        src={product.thumbnail}
        alt={product.name}
      />
      <div className="mb-3 flex">{renderStars(product.stars)}</div>
      <h3 className="mb-3 w-36 max-w-prose overflow-hidden text-sm font-normal">
        {product.aboutProduct.slice(0, 44)}...
      </h3>
      {product.discount !== 0 && (
        <div className="flex gap-3">
          <p className=" text-sm font-normal text-color10 line-through">
            {formatCurrency(product.price.toFixed(2))}
          </p>
          <span className="text-color8">{`-${product.discount}%`}</span>
        </div>
      )}

      <p className="text-sm font-medium">
        {formatCurrency(
          calculateDiscountedPrice(product.price, product.discount),
        )}
      </p>
    </div>
  );
}
SingleItemCard.propTypes = {
  flex: PropTypes.oneOf(['flex', 'flex-col']),
  hover: PropTypes.string,
  product: PropTypes.shape({
    inStock: PropTypes.bool,
    thumbnail: PropTypes.string,
    stars: PropTypes.number,
    uid: PropTypes.string,
    aboutProduct: PropTypes.string,
    discount: PropTypes.number,
    price: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
export default SingleItemCard;
