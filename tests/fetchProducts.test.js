const { expect } = require('@jest/globals');
require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('verifica se fetchProducts é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });
  test('verifica se fetch é chamada após executar fetchProducts("computador");', () => {
    expect.assertions(2);
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(url);
  });
  test('verifica se fetchProducts() retorna erro "You must provide an url"', () => {
    expect.assertions(1);
    try{
      fetchProducts();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
