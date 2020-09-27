import React from 'react';
import Polls from './Polls';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firestore } from '../../firebaseContext';

export default function PollsList(props) {

  const [polls] = useCollectionData(firestore.collection('sessions').doc('123321').collection('teacherQuestions'));

  return(
    <div>
      <Polls />
    </div>
  );
}