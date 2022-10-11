const getSavedCartItems = () => {
  // seu código aqui
  const cartItem = localStorage.getItem('cartItems');
  return cartItem;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
