'use strict'

const Store = use('App/Models/Store')

class StoreController {

    async register({ request }) {
        const data = request.only(['name', 'address', 'phone', 'user_id'])

        const store = await Store.create(data)
        return store
    }

    async get({ request }) {
        const store = await Store.all()
        return store
    }
}

module.exports = StoreController
