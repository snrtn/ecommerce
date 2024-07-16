// src/data/menus.ts

const menus = {
	hommes: {
		sections: [
			{
				title: 'Upper',
				items: [
					{ label: 'Jackets', href: '/hommes/jackets' },
					{ label: 'Shirts', href: '/hommes/shirts' },
					{ label: 'T-Shirts', href: '/hommes/tshirts' },
				],
			},
			{
				title: 'Lower',
				items: [
					{ label: 'Jeans', href: '/hommes/jeans' },
					{ label: 'Shorts', href: '/hommes/shorts' },
				],
			},
			{
				title: 'Footwear',
				items: [
					{ label: 'Shoes', href: '/hommes/shoes' },
					{ label: 'Sneakers', href: '/hommes/sneakers' },
				],
			},
		],
	},
	femmes: {
		sections: [
			{
				title: 'Upper',
				items: [
					{ label: 'Dresses', href: '/femmes/dresses' },
					{ label: 'Tops', href: '/femmes/tops' },
					{ label: 'T-Shirts', href: '/femmes/shirts' },
				],
			},
			{
				title: 'Lower',
				items: [
					{ label: 'Leggings', href: '/femmes/leggings' },
					{ label: 'Jeans', href: '/femmes/jeans' },
					{ label: 'Shorts', href: '/femmes/jeans' },
				],
			},

			{
				title: 'Footwear',
				items: [
					{ label: 'Shoes', href: '/femmes/shoes' },
					{ label: 'Sneakers', href: '/femmes/sneakers' },
					{ label: 'Sandals', href: '/femmes/sandals' },
				],
			},
		],
	},
};

export default menus;
