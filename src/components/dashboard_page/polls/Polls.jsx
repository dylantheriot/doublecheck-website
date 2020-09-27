import React, {useState} from 'react';
import Polls4Modal from './Polls4Modal';

export default function Polls(props) {
  const [openModal, setOpenModal] = useState(false);

  function handleResultsClick() {
    setOpenModal(true);
  }

  return (
    <div className="flex flex-row text-2xl py-4">
    <table className="w-full">
      <colgroup>
        <col className="w-3/12" />
        <col className="w-5/12" />
        <col className="w-2/12" />
        <col className="w-2/12" />
      </colgroup>
      <tbody>
        <tr>
          <td className="text-left pl-4">Polls #1</td>
          <td className="text-left px-4">Test 123.....</td>
          <td className="text-right"><button class="bg-flutter-deepPurpleAccent hover:bg-purple-700 text-white text-xl font-bold py-2 px-4 rounded-lg focus:outline-none">END POLL</button></td>
          <td className="text-right"><button class="bg-flutter-deepPurpleAccent hover:bg-purple-700 text-white text-xl font-bold py-2 px-4 rounded-lg focus:outline-none" onClick={handleResultsClick}>RESULTS</button></td>
        </tr>
      </tbody>
    </table>
    <Polls4Modal setShowModal={setOpenModal} showModal={openModal} />
  </div>
  );
}