import Moment from 'react-moment';

// COMMON
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { Categories } from '../items';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import { StyledHeaderImageWrapper, StyledHeaderWrapper, StyledArticleDate } from './Styles';

const Header = ({ image, title, author, date, categories }) => {
	const imageUrl = getStrapiMedia(image);

	return (
		<StyledHeaderWrapper>
			<StyledHeaderImageWrapper>{image && <img src={imageUrl} alt="" />}</StyledHeaderImageWrapper>
			{categories && <Categories categories={categories} />}
			{title && <HeaderWithBottom header={title} type="article" />}

			<StyledArticleDate active={author?.name}>
				{author?.name && <p>{author?.name}</p>}
				{date && (
					<span>
						<Moment format="L" locale="spanl">
							{date}
						</Moment>
					</span>
				)}
			</StyledArticleDate>
		</StyledHeaderWrapper>
	);
};

export default Header;
