'use strict'

const Product = use('App/Models/Product')
const Database = use('Database')
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

    async getProductLoja(){
        return await Database
            .table('products')
                .innerJoin('stores', 'stores.id', 'products.store_id')
    }
}

module.exports = ProductController
