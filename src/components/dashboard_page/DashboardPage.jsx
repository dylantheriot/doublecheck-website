import React from 'react';
import Navbar from '../navbar/Navbar';
import PollsTab from './polls/PollsTabs';

export default function DashboardPage() {
  return (
    <div className="w-full h-full text-black">
    <Navbar />
    <div className="h-full w-full px-16 flex flex-row mt-4 w-full">
        <PollsTab />
    </div>
    </div>
  );
}