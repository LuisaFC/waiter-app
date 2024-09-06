import {Request, Response} from 'express';
import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response) {
  console.log(Category.find())
  const categories = await Category.find()

  res.json(categories)
}
