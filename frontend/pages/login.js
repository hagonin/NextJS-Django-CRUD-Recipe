import { useRouter } from 'next/router';
import { useState } from 'react';

import LoginForm from '@components/Form/LoginForm';
import Img from '@components/UI/Image';

const fetchFake = (timer) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			rej('There are some errors');
		}, timer);
	});
};
function Login() {
	const router = useRouter();
	const [error, setError] = useState(false);
	const onSubmit = (data) => {
		return fetchFake(3000)
			.then(() => {
				console.log(data);
				router.push('/user/a');
			})
			.catch((err) => setError(err));
	};

	return (
		<div className="bg-primaryLight">
			<div className="container py-14 grid md:grid-cols-2 grid-cols-1 gap-8">
				<LoginForm onSubmit={onSubmit} />
				<div className="flex flex-col items-center justify-center max-md:-order-1">
					{error && <span className="text-red">{error}</span>}
					<h1>Welcome back</h1>
					<p className="text-center">
						It's nice to see you again. Log in to continue to your
						account.
					</p>
					<Img
						alt="login"
						src="/static/images/girl-cooking-1.png"
						className="w-full h-72 mt-10"
					/>
				</div>
			</div>
		</div>
	);
}

export default Login;
