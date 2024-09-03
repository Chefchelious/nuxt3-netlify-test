import { Schema, model } from 'mongoose';
import type { IProduct } from '~/types';

const ProductSchema = new Schema<IProduct>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: () => new Date().toISOString(),
  }
});

const Product = model<IProduct>('Product', ProductSchema);

export default Product;
