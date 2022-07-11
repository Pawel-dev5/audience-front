// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { Author, BlogCard } from '../items';

// STYLES
import { StyledBlogWrapper, StyledBlog, StyledAuthorsWrapper, StyledCardWrapper, StyledExpertHeader } from './Styles';

const Blog = ({ articles, authors, header }) => (
	<StyledBlogWrapper>
		{header && <HeaderWithBottom header={header} />}

		<StyledBlog>
			<StyledAuthorsWrapper>
				{authors?.expertHeader && <StyledExpertHeader>{authors?.expertHeader}</StyledExpertHeader>}

				{authors?.items?.map((author) => (
					<Author {...author?.attributes} key={author?.id} />
				))}
			</StyledAuthorsWrapper>

			{articles && (
				<StyledCardWrapper>
					{articles?.map((article) => (
						<BlogCard {...article?.attributes} key={article?.id} />
					))}
				</StyledCardWrapper>
			)}
		</StyledBlog>
	</StyledBlogWrapper>
);

export default Blog;
