import { useAuthContext } from '@context/auth-context';

import Navigate from './Navigate';
import NavMobi from './NavMobi';
import SocialLink from '@components/UI/SocialLink';
import Logo from '@components/Layouts/Header/Logo';
import SearchForm from '@components/Form/SearchForm';
import User from '@components/Layouts/Header/User';
import Button from '@components/UI/Button';
import Loader from '@components/UI/Loader';
import { useRouter } from 'next/router';

function Header() {
	const { isAuthenticated, user, loading } = useAuthContext();
	const router = useRouter();
	const handleSearch = (data) => {
		router.push({ pathname: '/search', query: { ...data } });
	};

	return (
		<header>
			<div className="bg-primary h-search-bar text-white fixed top-0 left-0 w-full z-[999]">
				<div className="container h-full flex items-center">
					<SearchForm onSubmit={handleSearch} />
					<div className="md:block hidden ml-auto">
						<SocialLink />
					</div>
					<div className="border-l border-[rgba(255,255,255,0.5)] pl-5 ml-5 max-lg:hidden">
						{loading ? (
							<Loader type="btn-user" />
						) : isAuthenticated ? (
							<User
								username={user?.username}
								email={user?.email}
								avatar={user?.avatar}
							/>
						) : (
							<Button
								type="link"
								href="/login"
								className="rounded-full hover:border-white"
							>
								Login
							</Button>
						)}
					</div>
				</div>
			</div>
			<div className="relative lg:mt-12 max-lg:fixed max-lg:left-0 max-lg:top-12 w-full z-[777] max-lg:shadow-sm max-lg:border max-lg:border-b max-lg:border-b-border bg-white">
				<div className=" container lg:h-logo-bar-pc h-logo-bar-mobile flex items-center lg:justify-center justify-between relative ">
					<Logo className="mx-auto" />
					<NavMobi />
				</div>
				<Navigate />
			</div>
		</header>
	);
}

export default Header;
