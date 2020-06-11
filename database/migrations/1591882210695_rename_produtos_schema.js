'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RenameProdutosSchema extends Schema {
  up() {
    this.rename('produtos', 'products')
  }

  down() {

  }
}

module.exports = RenameProdutosSchema
