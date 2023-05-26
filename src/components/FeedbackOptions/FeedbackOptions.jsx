import PropTypes from 'prop-types';
import StringConverter from 'utilities/StringConverter';
import {
  Container,
  OptionButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, ...restProps }) => {
  return (
    <>
      <Container>
        {Object.keys(restProps).map(element => (
          <OptionButton
            type="button"
            key={element}
            name={element}
            onClick={onLeaveFeedback}
          >
            {StringConverter.capitalize(element)}
          </OptionButton>
        ))}
      </Container>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default FeedbackOptions;
