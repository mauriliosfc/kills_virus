'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnLinkSchema extends Schema {
  up() {
    this.alter('produtos', (table) => {
      table.string('url', 254)
    })
  }

  down() {

  }
}

module.exports = AddColumnLinkSchema
