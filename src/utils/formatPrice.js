export const formatPrice = price => {
  if (price % 1 === 0) {
    return price.toFixed(2);
  } else {
    return price.toString();
  }
};
