const Api = require('opencart-sql-api');
const Products = require('opencart-sql-api/src/repository/Products');

const myStoreDB = new Api({
  database: {
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'opencart',
      password: 'opencart',
      database: 'opencart',
    }
  },
});
  
const productsRepository = new Products(myStoreDB);  
exports.myProducts = productsRepository.list({ page: 1, limit: 1 });
