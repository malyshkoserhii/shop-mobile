import { Product } from '../../shared/types';

export type GetProductsResponse = {
	data: Product[];
	total_results: number;
};
