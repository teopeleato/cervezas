const utils = require('../src/utils')
const expect = require('chai').expect

// Mocha
/* global describe it */
describe('Modulo utils', () => {
  describe('Suma', () => {
    it('Suma de dos positivos', () => {
      const res = utils.suma(3, 4)
      if (res !== 7) {
        throw new Error(`Resultado esperado 7, pero se ha recibido: ${res}.`)
      }
    })
  })
  // Con Chai
  describe('Resta', () => {
    it('Resta de dos numeros', function () {
      const res = utils.resta(6, 4)
      expect(res).to.equal(2)
    })
  })
  describe('Multiplicar', () => {

  })
  describe('Dividir', () => {

  })
})
