import * as React from 'react';

import { FlatList, ListRenderItem, RefreshControl } from 'react-native';

import { useProductsStore } from '../../../../store/products.store';

import { ProductListItem } from '../product-list-item';
import { Product } from '../../../../shared/types';
import { ListEmpty } from 'src/shared/components/list-empty/list-empty.component';

type ProductListProps = {
	products: Product[];
	loading: boolean;
	fetchProducts: () => Promise<void>;
	onEndReached: () => Promise<void>;
};

const List: React.FC<ProductListProps> = ({
	products,
	loading,
	fetchProducts,
	onEndReached,
}) => {
	const renderItem: ListRenderItem<Product> = React.useCallback(
		({ item }) => {
			return <ProductListItem product={item} />;
		},
		[],
	);

	return (
		<FlatList
			data={products}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			showsVerticalScrollIndicator={false}
			onEndReached={onEndReached}
			refreshControl={
				<RefreshControl
					refreshing={loading}
					onRefresh={fetchProducts}
				/>
			}
			ListEmptyComponent={<ListEmpty text="Product list is empty" />}
			onEndReachedThreshold={0.1}
			initialNumToRender={10}
		/>
	);
};

export const ProductList = React.memo(List);
