import React, { useEffect, useState } from 'react';
import Polls from './Polls';

import { useCollectionData, useCollection, useDocumentData, useDocument, useCollectionDataOnce } from 'react-firebase-hooks/firestore';

import { firestore } from '../../firebaseContext';

// const snapshot = await firestore.collection('sessions').doc('123321').collection('teacherQuestions').get();

export default function PollsList(props) {

  const [pollsCollection] = useCollection(firestore.collection('sessions').doc(props.sessionID).collection('teacherQuestions'));

  const [polls] = useCollectionData(firestore.collection('sessions').doc(props.sessionID).collection('teacherQuestions'));
  // const [test] = useCollectionData(firestore.collection('sessions').doc('123321').collection('teacherQuestions').doc('AfPMWnsmbvcuDBSFF4wa').collection('answers'));
  // const [test] = useCollectionData(firestore.collection('sessions').doc('123321').collection('teacherQuestions').doc('FvT1Qt8eOEg6pZDeIBfs').collection('answers'));
  // const [test] = useCollectionData(firestore.collection('sessions').doc('123321').collection('teacherQuestions').doc('QW7qrtoflA0A82NWqhDQ').collection('answers'));

  return (
    <div>
      {
        (polls && pollsCollection && polls.length !== 0) ? polls.map((p, index) => {
          let id = '123';
          let count = 0;
          if (pollsCollection) {
            pollsCollection.forEach((document) => {
              if (count === index) {
                id = document.id;
              }
              count += 1;
            });
          }
          return <Polls sessionID={props.sessionID} key={index} pollsCollection={pollsCollection} index={index} question={p.question} id={id} />
        })
        :
        <div className="text-xl font-bold">
        There are currently no polls!
        </div>
      }
    </div>
  );
}