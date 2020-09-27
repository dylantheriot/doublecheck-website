import React from 'react';
import Navbar from '../navbar/Navbar';
import PollsCard from './polls/PollsCard';
import QuestionsCard from './questions/QuestionsCard';

export default function DashboardPage(props) {
  let sessionID = props.location.state.sessionID;

  return (
    <div className="w-full h-full text-black">
    <Navbar sessionID={sessionID} />
    <div className="h-full w-full px-16 flex flex-row mt-4 w-full">
        <QuestionsCard sessionID={sessionID} />
        <PollsCard sessionID={sessionID} />
    </div>
    </div>
  );
}