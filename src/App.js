import React, { useState } from 'react';
import './index.css';
import StatisticsFeedback from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Container from './components/Container';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = () =>
    good ? Math.round((good * 100) / countTotalFeedback()) : 0;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const handleImcrement = event => {
    const btnName = event.currentTarget.textContent.toLowerCase();

    switch (btnName) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Section title="Please leaven feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleImcrement}
        />
        <StatisticsFeedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
}

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countPositiveFeedbackPercentage = () =>
//     this.state.good
//       ? Math.round((this.state.good * 100) / this.countTotalFeedback())
//       : 0;

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   handleImcrement = e => {
//     const btnName = e.currentTarget.textContent.toLowerCase();

//     Object.keys(this.state).forEach(key => {
//       if (btnName === key) {
//         this.setState(prevState => ({
//           [key]: prevState[key] + 1,
//         }));
//       }
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <Container>
//         <Section title="Please leaven feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.handleImcrement}
//           />

//           <StatisticsFeedback
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }

// export default Feedback;
