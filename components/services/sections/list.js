import { useState } from 'react';
// COMMON
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { ListItem } from '../itmes';

// STYLES
import { StyledListWrapper, StyledList } from './Styles';

const List = ({ list, color }) => {
	const [active, setActive] = useState(list?.list[0]?.id ?? 0);

	return (
		<StyledListWrapper>
			{list?.header && <HeaderWithBottom header={list?.header} description={list?.description} type="list" />}

			{list?.list && (
				<StyledList>
					{list?.list?.map(({ description, header, id }, index) => (
						<ListItem
							description={description}
							header={header}
							index={index + 1}
							active={active === id}
							color={color}
							onClick={() => setActive(id)}
						/>
					))}
				</StyledList>
			)}
		</StyledListWrapper>
	);
};

export default List;
