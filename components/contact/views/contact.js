// SECTIONS
import { Header } from '../sections';

const Contact = ({ image, blocks, seo, register, map, disclaimer }) => (
	<div>
		{image && <Header image={image} disclaimer={disclaimer} />}
		<div>Mapa</div>
		<div>Rejestr</div>
		<div>Blocks</div>
	</div>
);

export default Contact;
