import { useReducer } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

import { Container } from 'components/App/App.styled';

const INITIAL_VOTES = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const countVotes = (state, action) => {
  return { ...state, [action.type]: state[action.type] + action.payload };
};

const App = () => {
  const [votes, dispatch] = useReducer(countVotes, INITIAL_VOTES);

  const handleReviewCounter = e => {
    e.preventDefault();
    const { name } = e.currentTarget;
    dispatch({ type: [name], payload: 1 });
  };
  return (
    <Container>
      <h1> HW2-1 </h1>
      <Section title="Please leave feedback">
        <FeedbackOptions {...votes} onLeaveFeedback={handleReviewCounter} />
      </Section>
      <Section title="Statistics">
        <Statistics {...votes} />
      </Section>
    </Container>
  );
};
export default App;
