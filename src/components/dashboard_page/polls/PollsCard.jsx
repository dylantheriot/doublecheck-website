import React from 'react';
import PollsList from './PollsList';

export default function PollsCard(props) {
  return (
    <div className="w-full">
    <div className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" >
      <div className="-mb-px mr-2 last:mr-0 flex-auto text-center" >
        <div className="text-2xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-flutter-blue">
          POLLS
      </div>
      <div className="mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div>
                <PollsList sessionID={props.sessionID} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}