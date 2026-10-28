import * as V from 'valibot';
import { command } from '$app/server';
import { products } from './data/products';

let orderCount = 1000;

export const placeOrder = command(
	V.object({
		name: V.pipe(V.string(), V.minLength(2)),
		phone: V.pipe(V.string(), V.minLength(7)),
		items: V.array(
			V.object({
				id: V.number(),
				qty: V.pipe(V.number(), V.minValue(1))
			})
		)
	}),
	async (order) => {
		let total = 0;
		for (const item of order.items) {
			const product = products.find((p) => p.id === item.id);
			if (product) {
				total += product.price * item.qty;
			}
		}
		orderCount += 1;
		console.log(`Order #${orderCount} from ${order.name} (${order.phone}): $${total}`);
		return { orderId: orderCount, total };
	}
);
