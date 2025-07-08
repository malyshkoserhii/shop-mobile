import { HttpFactoryService } from '../../shared/services/http-factory.service';
import { HttpService } from '../../shared/services/http.service';
import { GetProductsParams, GetProductsResponse } from './products.types';

class ProductService {
	private readonly module = 'products';

	constructor(private readonly httpService: HttpService) {}

	public async getProducts(
		params: GetProductsParams,
	): Promise<GetProductsResponse> {
		return this.httpService.get(
			`${this.module}/all?skip=${params.skip}&take=${params.take}&sort=${params.sort}&search=${params.search}`,
		);
	}
}

export const productService = new ProductService(
	new HttpFactoryService().createHttpService(),
);
