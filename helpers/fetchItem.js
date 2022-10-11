const fetchItem = async (id) => {
  // seu código aqui
  if (!id) throw new Error('You must provide an url');
  const endPoint = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
