import React from 'react';

export default function Question(props) {
  return (
    <div className="flex flex-row text-2xl py-4">
      <table className="w-full">
        <colgroup>
          <col className="w-1/12" />
          <col className="w-8/12" />
          <col className="w-2/12" />
        </colgroup>
        <tbody>
          <tr>
            <td className="text-right">{props.emojis}</td>
            <td className="text-left px-4">{props.questionBody}</td>
            <td className="text-right">{props.upVotes} 👍</td>
          </tr>
        </tbody>
      </table>
    </div>
  );


}