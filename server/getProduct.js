const products = require('../products.json')

const getProduct = (req, res) => {
    const product = products.find( value => value.id === +req.params.id)
    if (!product) {
      return res.status(500).send(`Item isn't real`);
    }
    res.status(200).send(product)
  }


module.exports = getProduct