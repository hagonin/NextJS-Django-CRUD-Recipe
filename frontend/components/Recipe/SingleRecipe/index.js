import {
	BsBookmarkFill,
	BsClock,
	BsPinterest,
	BsPrinter,
} from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import Button from '@components/UI/Button';
import Img from '@components/UI/Image';
import formatDate from '@utils/formatdate';
import Check from './Check';
import createMarkup from '@utils/createMarkup';
import Thumbnail from '@components/UI/Slider/Thumbnail';
import { RiBookMarkFill } from 'react-icons/ri';
import handleIngredientFromArr from '@utils/handleIngredientFromArr';
import Ingredient from './Ingredient';
import Start from '@components/Form/Reviews/Start';
import Rating from '@components/UI/Reviews/Rate';

function SingRecipe({
	id,
	updated_at,
	image_url: cover,
	prep_time,
	cook_time,
	instructions,
	serving,
	title,
	description,
	notes,
	reviews_count,
	user: author,
	ingredients,
	images = [],
	checkBookmarkAct,
	handleToggleBookmark,
}) {
	const actBookmark = checkBookmarkAct(id);
	const updated_at_format = formatDate(updated_at);
	const descriptionMarkup = createMarkup(description);
	const instructionsMarkup = createMarkup(instructions);

	return (
		<div>
			<h1 className="text-center">{title}</h1>

			<span className="block text-center font-medium mt-3">
				{updated_at_format} / by {author}
				<button
					onClick={() => handleToggleBookmark(actBookmark, id)}
					className={`text-2xl ml-2  ${
						actBookmark ? 'text-primary' : 'text-black'
					} `}
				>
					<BsBookmarkFill />
				</button>
			</span>
			<Img
				src={cover}
				alt="cover"
				className="mt-5 lg:w-1/2 mx-auto "
			/>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 border-y border-border mt-8 py-3 text-sm gap-4">
				<div className="flex items-center gap-2">
					<BsClock /> <span>Pre-cook: {prep_time} minutes</span>
				</div>
				<div className="flex items-center gap-2">
					<BsClock /> <span>Cook-cook: {cook_time} minutes</span>
				</div>
				<div className="flex items-center gap-2">
					<FaUser /> <span>Serves: {serving} people</span>
				</div>
			</div>
			<div
				dangerouslySetInnerHTML={descriptionMarkup}
				className="mt-5 mb-10"
			/>
			{images.length > 0 && <Thumbnail images={images} />}

			<div className="border border-border rounded-md p-6 mt-10">
				<div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-6 md:gap-4 gap-6">
					<div className="lg:col-span-8">
						<h2 className="text-center">{title}</h2>
						<span className="block text-center mt-3">
							{updated_at_format} / by <b>{author}</b>
						</span>
						<div className="flex flex-col gap-3 mt-5 text-sm">
							<span className="flex items-center gap-2">
								<BsClock />
								<span>Pre-cook: {prep_time} minutes</span>
							</span>
							<span className="flex items-center gap-2">
								<BsClock />
								<span>Cook-cook: {cook_time} minutes</span>
							</span>
							<span className="flex items-center gap-2">
								<FaUser />
								<span>Serves: {serving} people</span>
							</span>
							{/* <Rating number={averageReviews} /> */}
							{/* <span>{reviews_count} reviews</span> */}
						</div>

						<Title title="Ingredients" />
						<Ingredient ingredients={ingredients} />
					</div>
					<div className="lg:col-span-4 flex flex-col gap-6 max-lg:row-start-1">
						<Img
							src={cover}
							alt="cover"
							className="mt-5 mx-auto "
						/>
					</div>
				</div>
				<Title title="Instructions" />
				<div dangerouslySetInnerHTML={instructionsMarkup} />
				{notes && (
					<>
						<Title title="NOTE" />
						<p>{notes}</p>
					</>
				)}
			</div>
		</div>
	);
}

const Title = ({ title }) => (
	<span className="text-lg text-black uppercase border-b border-primary pb-1 mt-6 mb-4 inline-block">
		{title}
	</span>
);
export default SingRecipe;
