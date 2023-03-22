/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		// loader: 'custom',
		// loaderFile: './my/image/loader.js',
		domains: ['127.0.0.1', 'res.cloudinary.com'],
		remotePatterns: [
			{
				hostname: 'k7d2p7y5.stackpathcdn.com',
			},
			{
				hostname: 'res.cloudinary.com',
			},
		]
	},
};

module.exports = nextConfig;