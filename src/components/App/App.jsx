import  { useState, useEffect } from 'react';
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from '../Notification/Notification.jsx';
export default function App () {
    const [feedbackTypes, setFeedbackTypes] = useState(() => {
        const storedFeedback = localStorage.getItem('feedbackTypes');
        return storedFeedback ? JSON.parse(storedFeedback) : {
            good: 0,
            neutral: 0,
            bad: 0
        };
    });

    useEffect(() => {
        localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
    }, [feedbackTypes]);

    const updateFeedback = (feedbackType) => {
        setFeedbackTypes((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

    const resetFeedback = () => {
        setFeedbackTypes({
            good: 0,
            neutral: 0,
            bad: 0
        });
    };

    return (
        <>
            <Description/>
            <Options updateFeedback={updateFeedback}
                totalFeedback={totalFeedback}
                resetFeedback={resetFeedback}/>
            {totalFeedback > 0 ?(
            <Feedback feedbackTypes={feedbackTypes} />
                ) : (
                <Notification message="No feedback yet!" />
                )}
        </>
    );
}

