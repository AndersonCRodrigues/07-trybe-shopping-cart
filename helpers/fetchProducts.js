const fetchProducts = async (product) => {
  // seu código aqui
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
