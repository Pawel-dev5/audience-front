import Link from 'next/link';
import { useRouter } from 'next/router';
import Moment from 'react-moment';
import 'moment/locale/pl';
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import { StyledCardContent, StyledCard, StyledCardImage, StyledCardTitle, StyledCardAuthor, StyledCardDesc } from './Styles';

const BlogCard = ({ children }) => {
	const router = useRouter();

	const {
		attributes: { image, title, slug, author, description, createdAt },
	} = children;

	return (
		<Link href={`/blog/${slug}`} locale={router?.locale}>
			<StyledCard>
				{image && (
					<StyledCardImage>
						<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.name ?? ''} />
					</StyledCardImage>
				)}

				<StyledCardContent>
					{title && <StyledCardTitle>{title}</StyledCardTitle>}
					<StyledCardAuthor>
						{author && <span>{author?.data?.attributes?.name}</span>}
						{createdAt && (
							<Moment format="L" locale="pl">
								{createdAt}
							</Moment>
						)}
					</StyledCardAuthor>
					<hr />

					{description && <StyledCardDesc>{description}</StyledCardDesc>}
				</StyledCardContent>
			</StyledCard>
		</Link>
	);
};

export default BlogCard;
