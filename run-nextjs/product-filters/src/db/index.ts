import { Index } from '@upstash/vector';
import * as dotenv from 'dotenv';

dotenv.config();

export type Product = {
  id: string;
  imageId: string;
  name: string;
  size: 'S' | 'M' | 'L';
  color: 'white' | 'blue' | 'green' | 'purple' | 'beige';
  price: number;
};
export const db = new Index<Product>();
