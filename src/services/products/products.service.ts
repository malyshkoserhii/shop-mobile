import { HttpFactoryService } from '../../shared/services/http-factory.service';
import { HttpService } from '../../shared/services/http.service';
import { Pagination } from '../../shared/types';
import { GetProductsResponse } from './products.types';

class ProductService {
	private readonly module = 'products';

	constructor(private readonly httpService: HttpService) {}

	public async getProducts(params: Pagination): Promise<GetProductsResponse> {
		return this.httpService.get(
			`${this.module}/all?skip=${params.skip}&take=${params.take}&sort=${'asc'}&search=${params.search}`,
		);
	}
}

export const productService = new ProductService(
	new HttpFactoryService().createHttpService(),
);
