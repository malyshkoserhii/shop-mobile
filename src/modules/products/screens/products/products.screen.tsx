import * as React from 'react';
import { Text } from 'react-native';

import { useForm } from 'react-hook-form';

import { styles } from './products.styles';

import { Layout } from '../../../../shared/components/layout';
import { ProductList } from '../../components/products-list';
import { SortByPriceBlock } from '../../components/sort-by-price-block';
import { useProductsStore } from '../../../../store/products.store';
import { useGetProducts } from '../../hooks/get-products.hook';

import { Input } from '../../../../shared/components/input';

type SearchProductForm = {
	productName: string;
};

export const ProductsScreen = () => {
	const products = useProductsStore((state) => state.products);

	const { control, watch } = useForm<SearchProductForm>({
		mode: 'all',
		reValidateMode: 'onChange',
		defaultValues: {
			productName: '',
		},
	});

	const productNameValue = watch('productName');

	const { loading, sort, onEndReached, onRefresh, onAscPres, onDescPres } =
		useGetProducts(productNameValue);

	return (
		<Layout isBottomTab={true}>
			<Text>Products Screeen</Text>

			<Input
				name="productName"
				control={control}
				defaultValue=""
				extraInputContainerStyles={styles.input}
			/>

			<SortByPriceBlock
				activeSortType={sort}
				onAscPress={onAscPres}
				onDescPress={onDescPres}
			/>

			<ProductList
				products={products}
				loading={loading}
				onEndReached={onEndReached}
				fetchProducts={onRefresh}
			/>
		</Layout>
	);
};
