'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosSchema extends Schema {
  up() {
    this.create('produtos', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.integer('preco').notNullable()
      table.integer('store_id').notNullable()
      table.string('url_img', 254)
      table.timestamps()
    })
  }

  down() {
    this.drop('produtos')
  }
}

module.exports = ProdutosSchema
