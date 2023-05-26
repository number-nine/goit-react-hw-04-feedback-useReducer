import { useState } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

import { Container } from 'components/App/App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbacks = {
    good,
    neutral,
    bad,
  };
  
  const handleReviewCounter = e => {
    e.preventDefault();
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
 
  };
  return (
    <Container>
      <h1> HW2-1 </h1>
      <Section title="Please leave feedback">
        <FeedbackOptions {...feedbacks} onLeaveFeedback={handleReviewCounter} />
      </Section>
      <Section title="Statistics">
        <Statistics {...feedbacks} />
      </Section>
    </Container>
  );
};
export default App;
