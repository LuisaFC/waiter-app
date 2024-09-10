import {Request, Response} from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const {} = req.body;

    const product = await Product.create({})

    res.status(201).json(product)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
