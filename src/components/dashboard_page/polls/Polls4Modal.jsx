import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useCollectionData, useCollection, useDocumentData, useDocument, useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { firestore } from '../../firebaseContext';

export default function Polls4Modal(props) {
  const [tempData, setTempData] = useState([
    { title: 'A', value: 0, color: '#1368ce' },
    { title: 'B', value: 0, color: '#e21b3c' },
    { title: 'C', value: 0, color: '#ffa602' },
    { title: 'D', value: 0, color: '#26890c' },
  ]
  );
  const [pollsData] = useCollectionData(firestore.collection('sessions').doc(props.sessionID).collection('teacherQuestions').doc(props.id).collection('answers'));

  const [selected, setSelected] = useState(-1);
  const [hovered, setHovered] = useState(undefined);

  useEffect(()=>{
    if (pollsData) {
      console.log(pollsData[0].count)
      setTempData(
        [
          { title: 'A', value: pollsData[0].count, color: '#1368ce' },
          { title: 'B', value: pollsData[1].count, color: '#e21b3c' },
          { title: 'C', value: pollsData[2].count, color: '#ffa602' },
          { title: 'D', value: pollsData[3].count, color: '#26890c' },
        ]
      )
    }
  },[pollsData]);

  const data = tempData.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: '#7C4DFF',
      };
    }
    return entry;
  });

  const lineWidth = 60;

  return (
    <>
      {props.showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-7/12 my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Poll #{props.index + 1}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      props.setShowModal(false);
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto w-full text-left">
                  <div class="mb-0 pt-0 text-2xl">
                    <div className="flex flex-row items-center justify-evenly">
                      <div className="7/12">
                        <div className="underline">
                          {props.question}
                        </div>
                        <table className="text-xl my-4">
                          <colgroup>
                            <col className="w-1/12" />
                            <col className="w-4/12" />
                            <col className="w-1/12" />
                            <col className="w-1/12" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <td className="text-left">A.</td>
                              <td className="text-left">{pollsData && pollsData[0].answer}</td>
                              <td className="text-left">|</td>
                              <td className="text-right">{pollsData && pollsData[0].count}</td>
                            </tr>
                            <tr>
                              <td className="text-left">B.</td>
                              <td className="text-left">{pollsData && pollsData[1].answer}</td>
                              <td className="text-left">|</td>
                              <td className="text-right">{pollsData && pollsData[1].count}</td>
                            </tr>
                            <tr>
                              <td className="text-left">C.</td>
                              <td className="text-left">{pollsData && pollsData[2].answer}</td>
                              <td className="text-left">|</td>
                              <td className="text-right">{pollsData && pollsData[2].count}</td>
                            </tr>
                            <tr>
                              <td className="text-left">D.</td>
                              <td className="text-left">{pollsData && pollsData[3].answer}</td>
                              <td className="text-left">|</td>
                              <td className="text-right">{pollsData && pollsData[3].count}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="w-5/12 pl-8">
                        <PieChart
                          style={{
                            fontFamily:
                              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                            fontSize: '6px',
                          }}
                          data={data}
                          radius={PieChart.defaultProps.radius - 6}
                          lineWidth={60}
                          segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                          segmentsShift={(index) => (index === selected ? 6 : 1)}
                          animate
                          label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%' + ' (' + dataEntry.title + ')' }
                          labelPosition={100 - lineWidth / 2}
                          labelStyle={{
                            fill: '#fff',
                            opacity: 0.75,
                            pointerEvents: 'none',
                          }}
                          onClick={(e, index) => {
                            setSelected(index === selected ? undefined : index);
                          }}
                          onMouseOver={(e, index) => {
                            setHovered(index);
                          }}
                          onMouseOut={() => {
                            setHovered(undefined);
                          }}
                        />
                      </div>
                    </div>


                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-flutter-blue text-xl text-white font-bold active:bg-blue-600 uppercase px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-0"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => {
                      props.setShowModal(false);
                    }}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}