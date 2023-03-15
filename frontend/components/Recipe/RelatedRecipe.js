import CommonSection from '@components/Layouts/SideBar/Widget/CommonSection';
import Loader from '@components/UI/Loader';
import Slider from '@components/UI/Slider';
import useQuery from 'hook/useQuery';
import RecipeCard from './RecipeCard';

function RelatedRecipe({ categoryName }) {
	const { data: recipes } = useQuery(6, { category: categoryName });
	return (
		<div className="mt-6">
			<CommonSection
				title="You may also like"
				noBorder
			/>
			{recipes ? (
				<Slider noBtn>
					{recipes.map((recipe) => {
						return (
							<RecipeCard
								key={recipe.id}
								main_image={recipe.main_image}
								name={recipe.title}
								slug={recipe.slug}
								// summary={recipe.description}
								rating={recipe.rating}
								reviews_count={recipe.reviews_count}
								smallCard
								date={recipe.created_at || recipe.updated_at}
								className="keen-slider__slide mb-3"
							/>
						);
					})}
				</Slider>
			) : (
				<div className="grid grid-cols-3 md:gap-6 gap-2 mt-5">
					<Loader type="recipe-card" />
					<Loader type="recipe-card" />
					<Loader type="recipe-card" />
				</div>
			)}
		</div>
	);
}

export default RelatedRecipe;
