import {ECurrency} from '../../enums/client/currency.enum';
import {ICategory} from './category.interface';

export interface IAds {
  id: number;
  title: string;
  description: string;
  price: ECurrency;
  category: ICategory;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
}
