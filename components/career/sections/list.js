// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLE
import { StyledListWrapper, StyledImageWrapper, StyledTextWrapper, StyledListHeader } from './Styles';

const List = ({ image, header, description, listHeader, items }) => (
	<StyledListWrapper>
		<StyledImageWrapper>
			<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText ?? header} />
		</StyledImageWrapper>

		<StyledTextWrapper>
			{header && <HeaderWithBottom header={header} description={description} type="career" />}

			{listHeader && <StyledListHeader>{listHeader}</StyledListHeader>}
			{items?.length > 0 && (
				<ul>
					{items?.map(({ title, id }) => (
						<li key={id}>{title}</li>
					))}
				</ul>
			)}
		</StyledTextWrapper>
	</StyledListWrapper>
);

export default List;
