'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Api está no ar' }
})

/*
    Authentication
*/
Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.post('/logout', 'AuthController.logout')

/**
 * Store
 */

Route.post('/store', 'StoreController.register')
Route.get('/stores', 'StoreController.get')

/**
 * Product
 */

Route.post('/product', 'ProductController.register')
Route.get('/products', 'ProductController.getProductLoja')