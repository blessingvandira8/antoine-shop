import { products } from '../lib/data/products';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return { products };
};
