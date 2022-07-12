import { useState } from 'react';
import {
	StyledOl,
	StyledLine,
	StyledListWrapepr,
	StyledItemsWrapper,
	StyledMainHeader,
	StyledLineWrapper,
	StyledTextWrapper,
	StyledContent,
	StyledTitle,
} from './Styles';

const List = ({ list }) => (
	<StyledOl>
		{list?.map(({ items, header, subHeader, subDescription, id }, index) => {
			const [active, setActive] = useState(false);

			return (
				<StyledListWrapepr key={id}>
					<StyledLineWrapper>
						<span>0{index + 1}.</span>
						<StyledLine />
					</StyledLineWrapper>

					<StyledTextWrapper>
						<StyledMainHeader onClick={() => setActive(!active)}>{header}</StyledMainHeader>

						{active && (
							<StyledContent>
								<span>{subHeader}</span>
								<hr />
								<span>{subDescription}</span>

								{items?.map(({ id, header, description }) => (
									<StyledItemsWrapper key={id}>
										<StyledTitle>{header}</StyledTitle>
										<span>{description}</span>
									</StyledItemsWrapper>
								))}
							</StyledContent>
						)}
					</StyledTextWrapper>
				</StyledListWrapepr>
			);
		})}
	</StyledOl>
);

export default List;
