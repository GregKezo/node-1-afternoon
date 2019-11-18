const express = require('express')
const PORT = 4040
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')


const app = express()
app.use(express.json())

app.get('/api/products', getProducts)

app.get(`/api/product/:id`, getProduct)


app.listen(PORT, console.log(`Server is running on ${PORT}`))