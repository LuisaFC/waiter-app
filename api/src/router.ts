import path from 'node:path'

import { Router } from 'express'
import multer from 'multer'

import {listCategories} from './App/useCases/Categories/listCategories'
import { createCategory } from './App/useCases/Categories/createCategory';
import { listProducts } from './App/useCases/products/listProducts';
import { createProduct } from './App/useCases/products/createProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    }
  })
})

//List Categories
router.get('/categories', listCategories)

// Create Catergories
router.post('/categories', createCategory)

//List Products
router.get('/products', listProducts)

// Create Products
router.post('/products', upload.single('image'), createProduct)

// Get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Ok')
})

//List orders
router.get('/orders', (req, res) => {
  res.send('Ok')
})

//Create order
router.post('/orders', (req, res) => {
  res.send('Ok')
})

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok')
})

//Delete order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok')
})
