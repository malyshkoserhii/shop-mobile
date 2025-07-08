import { Product, SortTypes } from '../../shared/types';

export type GetProductsParams = {
	skip: number;
	take: number;
	search: string;
	sort: SortTypes;
};

export type GetProductsResponse = {
	data: Product[];
	total_results: number;
};
