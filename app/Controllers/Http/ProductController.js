'use strict'

const Product = use('App/Models/Product')
class ProductController {

    async register({ request }) {
        const data = request.only(['name', 'preco', 'store_id', 'url_img', 'url'])

        const product = await Product.create(data)
        return product
    }

    async get({ request }) {
        const products = await Product.all()
        return products
    }
}

module.exports = ProductController
