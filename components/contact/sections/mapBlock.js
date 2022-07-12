// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// STYLES
import { StyledMapBlockWrapper, StyledBiuroWrapper, StyledAdressWrapper, StyledContactWrapper } from './Styles';

const MapBlock = ({ adress, contact, header, mapLink }) => (
	<StyledMapBlockWrapper>
		{mapLink && (
			<iframe
				src={mapLink}
				width="549"
				height="517"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		)}

		<StyledBiuroWrapper>
			{header && <HeaderWithBottom header={header} type="mapBlock" />}

			{adress && (
				<>
					{adress?.map(({ id, city, street, code }) => (
						<StyledAdressWrapper key={id}>
							<span>{city}</span>
							<span>{street}</span>
							<span>{code}</span>
						</StyledAdressWrapper>
					))}
				</>
			)}

			{contact && (
				<StyledContactWrapper>
					<span>{contact?.number1}</span>
					<span>{contact?.number2}</span>
					<span>{contact?.email}</span>
				</StyledContactWrapper>
			)}
		</StyledBiuroWrapper>
	</StyledMapBlockWrapper>
);

export default MapBlock;
