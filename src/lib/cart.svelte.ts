import type { Product } from './types';
type CartItem = Product & { qty: number };
class Cart {
	items = $state<CartItem[]>([]);

	count = $derived(this.items.reduce((sum, item) => sum + item.qty, 0));
	total = $derived(this.items.reduce((sum, item) => sum + item.price * item.qty, 0));

	add(product: Product) {
		const existing = this.items.find((item) => item.id === product.id);
		if (existing) {
			existing.qty += 1;
		} else {
			this.items.push({ ...product, qty: 1 });
		}
	}
	remove(id: number) {
		this.items = this.items.filter((item) => item.id !== id);
	}
	clear() {
		this.items = [];
	}
}
export const cart = new Cart();
