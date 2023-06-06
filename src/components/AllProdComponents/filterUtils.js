export const filterProducts = (products, filterArr) => {
  if (!products) {
    return [];
  }

  if (filterArr.length === 0) {
    return products;
  }

  const categoryFilters = filterArr.filter(isCategoryFilter);
  const priceRangeFilters = filterArr.filter(isPriceRangeFilter);
  const starRatingFilters = filterArr.filter(isStarRatingFilter);
  const inStockFilter = filterArr.includes('in stock');

  return products.filter((product) => {
    const price = product.discountedPrice;
    const isInStock = product.inStock;

    const categoryMatch =
      categoryFilters.length === 0 ||
      categoryFilters.includes(product.category);
    const priceRangeMatch =
      priceRangeFilters.length === 0 ||
      priceRangeFilters.some((filter) => {
        const [min, max] = getPriceRange(filter);
        return price >= min && price <= max;
      });
    const inStockMatch = !inStockFilter || (inStockFilter && isInStock);
    const starRatingMatch =
      starRatingFilters.length === 0 ||
      starRatingFilters.includes(
        product.stars === 1 ? '1 star' : `${product.stars} stars`,
      );

    return categoryMatch && priceRangeMatch && inStockMatch && starRatingMatch;
  });
};

export const isCategoryFilter = (category) =>
  ['desktops', 'monitors', 'laptops', "custom PC's"].includes(category);

export const isPriceRangeFilter = (priceRange) =>
  ['0-299', '300-499', '500-999', '1000-above'].includes(priceRange);

export const isStarRatingFilter = (starRating) =>
  ['0 stars', '1 star', '2 stars', '3 stars', '4 stars', '5 stars'].includes(
    starRating,
  );

export const getPriceRange = (priceRange) => {
  switch (priceRange) {
    case '0-299':
      return [0, 299];
    case '300-499':
      return [300, 499];
    case '500-999':
      return [500, 999];
    case '1000-above':
      return [1000, Number.POSITIVE_INFINITY];
    default:
      return [];
  }
};
