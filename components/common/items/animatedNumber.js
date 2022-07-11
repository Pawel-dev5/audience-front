import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-hook-inview';

// STYLES
import { StyledNumber, StyledAnimatedNumber, StyledText, StyledWrapper } from './Styles';

const AnimatedNumber = ({ number: props, type, color }) => {
	if (!props) return null;
	const { text, number, unit } = props;

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
		<StyledAnimatedNumber type={type}>
			{number && (
				<StyledNumber ref={ref} type={type} color={color}>
					{visible && <CountUp start={0} end={number} duration={2} separator=" " />}
					{unit && <span>{unit}</span>}
				</StyledNumber>
			)}

			{text && <StyledText type={type}>{text}</StyledText>}
		</StyledAnimatedNumber>
	);
};

export default AnimatedNumber;
