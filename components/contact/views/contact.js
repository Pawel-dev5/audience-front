// SECTIONS
import { Header, MapBlock, Register, Blocks } from '../sections';

const Contact = ({ image, blocks, register, map, disclaimer }) => (
	<div>
		{image && <Header image={image} disclaimer={disclaimer} />}
		{map && <MapBlock {...map} />}
		{register && <Register {...register} />}
		{blocks && <Blocks items={blocks?.item} />}
	</div>
);

export default Contact;
