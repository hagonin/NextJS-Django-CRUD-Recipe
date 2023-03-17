import AuthProvider from '@context/auth-context';
import RootLayout from '@layouts/RootLayout';
import { images } from '@utils/constants';
import Head from 'next/head';
import '@styles/globals.css';
import RecipeProvider from '@context/recipe-context';
import { libre_baskerville, open_sans } from '@utils/fonts';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
	const render = Component.getLayout || ((pages) => pages);
	const router = useRouter();
	const Layout =
		router.pathname === '/login' || router.pathname === '/signup'
			? Fragment
			: RootLayout;
	return (
		<>
			<Head>
				<title>HomeCook</title>
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				<meta
					name="description"
					content="HomeCook brings recipes from around the world right at home!"
				/>

				<link
					rel="icon"
					href={images.logoIcon}
				/>
			</Head>
			<main
				className={`${libre_baskerville.variable} ${open_sans.className} `}
			>
				<AuthProvider>
					<RecipeProvider>
						<Layout>{render(<Component {...pageProps} />)}</Layout>
					</RecipeProvider>
				</AuthProvider>
			</main>
		</>
	);
}

export default MyApp;
