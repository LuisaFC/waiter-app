import { Router } from 'express'
import {listCategories} from './App/useCases/Categories/listCategories'

export const router = Router();

//List Categories
router.get('/categories', listCategories)

// Create Catergories
router.post('/categories', (req, res) => {
  res.send('Ok')
})

//List Products
router.get('/products', (req, res) => {
  res.send('Ok')
})

// Create Products
router.post('/products', (req, res) => {
  res.send('Ok')
})

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
