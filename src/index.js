const cervezas = require('./cervezas.json')

const uniqueRandomArray = require('unique-random-array')

module.exports = {
  todas: cervezas,
  alAzar: uniqueRandomArray(cervezas)
}
