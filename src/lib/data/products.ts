import type { Product } from '../types';
export const products: Product[] = [
	{
		id: 1,
		name: 'Classic Shirt',
		price: 25,
		emoji: '',
		image: '/images/products/shirt.jpg.webp',
		category: 'Tops',
		description: 'Soft cotton shirt for everday wear.'
	},
	{
		id: 2,
		name: 'Summer Dress',
		price: 40,
		emoji: '',
		image: '/images/products/dress.jpg.webp',
		category: 'Dresses',
		description: 'Light and comfortable for hot days.'
	},
	{
		id: 3,
		name: 'Denim Jacket',
		price: 55,
		emoji: '',
		image: '/images/products/denim.jpg.webp',
		category: 'Outwear',
		description: 'Strong denim that never goes out of style.'
	},
	{
		id: 4,
		name: 'Sneakers',
		price: 60,
		emoji: '',
		image: '/images/products/sneakers.jpg.webp',
		category: 'Shoes',
		description: 'Comfortable shoes for walking all day.'
	},
	{
		id: 5,
		name: 'Leather Belt',
		price: 15,
		emoji: '',
		image: '/images/products/belt.jpg.webp',
		category: 'Accessories',
		description: 'Genuine Leather with a metal buckle.'
	}
];
