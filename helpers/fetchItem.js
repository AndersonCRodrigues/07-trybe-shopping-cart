const fetchItem = async (id) => {
  // seu código aqui
  const endPoint = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
};

fetchItem();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
