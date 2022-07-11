import Slider from 'react-slick';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import { StyledLogosWrapper } from './Styles';

const Logotypes = ({ items }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	if (!items) return null;
	return (
		<StyledLogosWrapper>
			<Slider {...settings}>
				{items?.map(({ image, link }) => (
					<a href={link} target="_blank">
						<img src={getStrapiMedia(image)} alt={link} />
					</a>
				))}
			</Slider>
		</StyledLogosWrapper>
	);
};
export default Logotypes;
