const express = require('express')

const router = express.Router();
const { getProduct, saveProduct, updateProduct, getProductById, deleteProduct } = require('../controller/productController')

router.get('/', getProduct)
router.get('/:id', getProductById)
router.post('/', saveProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)



module.exports = router