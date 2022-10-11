const { expect } = require('@jest/globals');
const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  expect.assertions(1);
  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  test('este se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', () => {
    expect.assertions(1);
    getSavedCartItems();
    const key = 'cartItems';
    expect(localStorage.getItem).toHaveBeenLastCalledWith(key);
  });
});
