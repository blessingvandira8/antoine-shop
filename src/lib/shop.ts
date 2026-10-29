export const shop = {
	name: 'Antoine Fashions',
	location: 'Zimbabwe',
	whatsapp: '263716611567',
	story:
		'Antoine Fashions is a clothing business based in zimbabwe. You can order through this website or on whatsApp, and we deliver across the country.',
	delivery: [
		'We deliver nationwide in Zimbabwe.',
		'Order on the website or send us a message on whatsApp.',
		'Tell us your town and we will confirm the delivery cost and time.'
	]
};
export function whatsappLink(text: string) {
	return `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(text)}`;
}
