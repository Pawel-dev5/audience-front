// SECTIONS
import { Header, MapBlock } from '../sections';

const Contact = ({ image, blocks, seo, register, map, disclaimer }) => (
	<div>
		{image && <Header image={image} disclaimer={disclaimer} />}

		{map && <MapBlock {...map} />}
		<div>Rejestr</div>
		<div>Blocks</div>
	</div>
);

export default Contact;
