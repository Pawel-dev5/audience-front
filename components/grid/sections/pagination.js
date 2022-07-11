import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CONTEXT
import { ContextData } from '../hooks/useGridFilters';

// COMMON
import { Button } from '../../common/items';

// STYLES
import { StyledPaginationWrapper, StyledPaginationArrow } from './Styles';

// HELPERS
import { generateArray } from '../../../helpers/arrayHelpers';

const Pagination = ({ pagination, path }) => {
	const { pageCount } = pagination;

	const { InitPagination, paginationCount } = useContext(ContextData);

	return (
		<StyledPaginationWrapper>
			<div>
				<StyledPaginationArrow
					type="button"
					onClick={() => InitPagination(paginationCount - 1, pageCount, path)}
					disabled={paginationCount === 1}
				>
					<FontAwesomeIcon icon="fa-angle-left" />
				</StyledPaginationArrow>

				{generateArray(pageCount)?.map(({ value }) => (
					<Button
						key={value}
						text={value}
						onClick={() => InitPagination(value, pageCount, path)}
						active={value === paginationCount}
					/>
				))}

				<StyledPaginationArrow
					type="button"
					onClick={() => InitPagination(paginationCount + 1, pageCount, path)}
					disabled={paginationCount === pageCount}
				>
					<FontAwesomeIcon icon="fa-angle-right" />
				</StyledPaginationArrow>
			</div>
		</StyledPaginationWrapper>
	);
};

export default Pagination;
