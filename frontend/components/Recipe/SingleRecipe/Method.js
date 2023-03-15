import Title from '@components/UI/Title';

function Method({ instructionsArr }) {
	return (
		<>
			<Title title="Method" />
			<ul className="text-base flex flex-col gap-2 p-0 m-0">
				{instructionsArr.map(({ content }, index) => (
					<li
						className="flex gap-2"
						key={index}
					>
						<span className="w-5 h-5 leading-5 text-sm border rounded-full shrink-0 text-center relative top-1">
							{index + 1}
						</span>
						<span className="first-letter:uppercase">
							{content}
						</span>
					</li>
				))}
			</ul>
		</>
	);
}

export default Method;
