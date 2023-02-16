/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				hostname: 'k7d2p7y5.stackpathcdn.com',
			},
			{
				hostname: 'res.cloudinary.com',
			},
		],
	},
};

module.exports = nextConfig;
