import React from 'react';
import Question from './Question';

export default function QuestionsList() {
  return (
    <div className="divide-y">
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  );
}