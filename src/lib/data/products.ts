import type { Product } from '../types';
export const products: Product[] = [
	{
		id: 1,
		name: 'Classic Shirt',
		price: 25,
		emoji: '',
		image: '/images/products/shirt.jpg.webp',
		category: 'Tops',
		description: 'Soft cotton shirt for everday wear.',
		sizes: ['S', 'M', 'L', 'XL'],
		colors: ['White', 'Blue'],
		stock: 12,
		rating: 4.5
	},
	{
		id: 2,
		name: 'Summer Dress',
		price: 40,
		emoji: '',
		image: '/images/products/dress.jpg.webp',
		category: 'Dresses',
		description: 'Light and comfortable for hot days.',
		sizes: ['S', 'M', 'L'],
		colors: ['Red', 'Yellow', 'Black'],
		stock: 8,
		rating: 4.8
	},
	{
		id: 3,
		name: 'Denim Jacket',
		price: 55,
		emoji: '',
		image: '/images/products/denim.jpg.webp',
		category: 'Outwear',
		description: 'Strong denim that never goes out of style.',
		sizes: ['M', 'L', 'XL'],
		colors: ['Black'],
		stock: 5,
		rating: 4.6
	},
	{
		id: 4,
		name: 'Sneakers',
		price: 60,
		emoji: '',
		image: '/images/products/sneakers.jpg.webp',
		category: 'Shoes',
		description: 'Comfortable shoes for walking all day.',
		sizes: ['39', '40', '41', '42', '43'],
		colors: ['White', 'Black'],
		stock: 0,
		rating: 4.7
	},
	{
		id: 5,
		name: 'Leather Belt',
		price: 15,
		emoji: '',
		image: '/images/products/belt.jpg.webp',
		category: 'Accessories',
		description: 'Genuine Leather with a metal buckle.',
		sizes: ['One size'],
		colors: ['Brown', 'Black'],
		stock: 20,
		rating: 4.2
	}
];
