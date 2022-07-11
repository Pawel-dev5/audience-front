import { useEffect, useState } from 'react';
import { useInView } from 'react-hook-inview';

// STYLE
import { StyledLine } from './Styles';

// PARENT MUST HAVE position: relative;
const AnimatedLine = ({ index, type }) => {
	const [visible, setVisible] = useState(false);

	const [ref, isVisible] = useInView({
		threshold: 1,
	});

	useEffect(() => {
		if (isVisible) {
			setVisible(true);
		}
	}, [isVisible]);

	return (
		<StyledLine ref={ref} odd={index} visible={visible} type={type}>
			{`0${index + 1}.`} <div />
		</StyledLine>
	);
};
export default AnimatedLine;
