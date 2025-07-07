import * as React from 'react';
import { useProductsStore } from '../../../store/products.store';
import { productService } from '../../../services/products/products.service';
import { TAKE_ENTITIES } from '../../../shared/constants/pagination';
import { useDebounce } from '../../../shared/hooks';

export const useGetProducts = (product: string) => {
	const [loading, setLoading] = React.useState(false);

	const [totalResults, setTotalResults] = React.useState(0);

	const [page, setPage] = React.useState(1);

	const products = useProductsStore((state) => state.products);

	const setProducts = useProductsStore((state) => state.setProducts);

	const setPaginatedProducts = useProductsStore(
		(state) => state.setPaginatedProducts,
	);

	const searchValue = useDebounce(product, 500);

	const fetchProducts = React.useCallback(async () => {
		try {
			const products = await productService.getProducts({
				skip: 0,
				take: 10,
				search: searchValue,
			});

			setPage(1);
			setProducts(products.data);
			setTotalResults(products.total_results);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	}, [searchValue]);

	React.useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	const onRefresh = React.useCallback(async () => {
		await fetchProducts();
	}, []);

	const onEndReached = React.useCallback(async () => {
		if (loading) return;

		if (totalResults === products.length) {
			return;
		}

		try {
			const skip = page * TAKE_ENTITIES;
			const take = TAKE_ENTITIES;

			const newProducts = await productService.getProducts({
				skip,
				take,
				search: searchValue,
			});

			setPaginatedProducts(newProducts.data);

			setPage((prev) => prev + 1);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	}, [loading, products.length, totalResults, searchValue]);

	return { loading, onEndReached, onRefresh };
};
