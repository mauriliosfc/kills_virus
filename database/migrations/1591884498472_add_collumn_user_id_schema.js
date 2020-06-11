'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCollumnUserIdSchema extends Schema {
  up() {
    this.alter('stores', table => {
      table.integer('user_id')
    })
  }

  down() {

  }
}

module.exports = AddCollumnUserIdSchema
