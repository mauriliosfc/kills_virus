'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoresSchema extends Schema {
  up() {
    this.create('stores', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('address', 80).notNullable()
      table.integer('phone')
      table.timestamps()
    })
  }

  down() {
    this.drop('stores')
  }
}

module.exports = StoresSchema
