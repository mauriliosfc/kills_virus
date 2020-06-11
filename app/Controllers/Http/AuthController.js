'use strict'
const User = use('App/Models/User')

class AuthController {
    async register({ request }) {
        const data = request.only(['username', 'email', 'password'])

        let user = await User.create(data)
        return user
    }
}

module.exports = AuthController
