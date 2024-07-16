/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
			{
				protocol: 'https',
				hostname: 'static.wixstatic.com',
			},
			{
				protocol: 'https',
				hostname: 'people.pic1.co',
			},
			{
				protocol: 'https',
				hostname: 'app-uploads-cdn.fera.ai',
			},
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'static.nike.com',
			},
			{
				protocol: 'https',
				hostname: 'example.com',
			},
			{
				protocol: 'http',
				hostname: 'www.w3.org',
			},
		],
	},
};

export default nextConfig;
