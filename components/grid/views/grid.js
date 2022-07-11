// CONTEXT
import { ContextProvider } from '../hooks/useGridFilters';

// SECTIONS
import { GridContent, GridFilters, Pagination } from '../sections';

// COMMON
import { HeaderWithBottom } from '../../common/sections';

const Grid = ({ items, categories, header, type, description, pagination }) => (
	<ContextProvider>
		{header && <HeaderWithBottom header={header} type={type} description={description} />}
		{categories && <GridFilters categories={categories} items={items} />}
		{items && <GridContent items={items} type={type} />}
		{pagination && <Pagination pagination={pagination?.pagination} path={pagination?.path} />}
	</ContextProvider>
);

export default Grid;
