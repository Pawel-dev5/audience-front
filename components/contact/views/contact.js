// SECTIONS
import { Header, MapBlock, Register } from '../sections';

const Contact = ({ image, blocks, seo, register, map, disclaimer }) => (
	<div>
		{image && <Header image={image} disclaimer={disclaimer} />}
		{map && <MapBlock {...map} />}
		{register && <Register {...register} />}
		<div>Blocks</div>
	</div>
);

export default Contact;
