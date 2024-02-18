import css from './Feedback.module.css'
function Feedback({ feedbackTypes }) {
   const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad
    const positiveFeedback = Math.round(((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100)

    return (
        <div className={css.feedback}>
            <p>Good: {feedbackTypes.good}</p>
            <p>Neutral: {feedbackTypes.neutral}</p>
            <p>Bad: {feedbackTypes.bad}</p>
            <p>Total: { totalFeedback}
            </p>
            <p>Positive: {positiveFeedback}%</p>
        </div>
    );
}

export default Feedback;
