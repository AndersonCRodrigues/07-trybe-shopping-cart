const { expect } = require('@jest/globals');
require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('verifica se fectItem é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });
  test('verifica se fetch é chamado após executar fetchItem("MLB1615760527")', async () => {
    expect.assertions(2);
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(url);
  });
  test('verifica se o retorn de fetchItem("MLB1615760527") é um objeto igual a item', async ()=> {
    expect.assertions(1);
    const expected = await fetchItem('MLB1615760527');
    expect(expected).toEqual(item);
  });
  test('verifica de fetchItem() retorna o erro "You must provide an url"', async ()=> {
    expect.assertions(1);
    try {
      await fetchItem();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })
});
