const products = require('../products.json')

const getProducts = (req, res) => {
    if( req.query.price ) {
      res.status(200).send(products.filter( ele => ele.price >= +req.query.price))
    }  
    res.status(200).send(products)
  }

  module.exports = getProducts