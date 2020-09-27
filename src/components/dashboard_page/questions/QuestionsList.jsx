import React from 'react';
import Question from './Question';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firestore } from '../../firebaseContext';

export default function QuestionsList(props) {

  const [questions] = useCollectionData(firestore.collection('sessions').doc(props.sessionID).collection('studentQuestions'));

  return (
    <div className="divide-y">
      {
        questions && ((questions.length !== 0) ? (questions.filter((q) => {return !q.isViewed}).sort((q1, q2) => (q1.upVotes < q2.upVotes) ? 1 : -1).map((q) => <Question emojis="" isViewed={q.isViewed} questionBody={q.questionBody} upVotes={q.upVotes} />))
        :
        <div className="text-xl font-bold">
        There are currently no questions!
        </div>)
      }
      {
        questions && ((questions.length !== 0) ? (questions.filter((q) => {return q.isViewed}).sort((q1, q2) => (q1.upVotes < q2.upVotes) ? 1 : -1).map((q) => <Question emojis="✔️✔️" isViewed={q.isViewed} questionBody={q.questionBody} upVotes={q.upVotes} />)) 
        :
        '')
      }
    </div>
  );
}