import React, { useState } from 'react';
import Particles from 'react-particles-js';
import ReactFloaterJs from 'react-floaterjs'
import Logo from '../../assets/images/logo_white1.png';
import { useHistory } from "react-router-dom";

import LoadingOverlay from 'react-loading-overlay';


export default function CreateSessionPage() {
  let history = useHistory();

  const [isGenerating, setIsGenerating] = useState(false);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function handleSessionGeneration() {
    setIsGenerating(true);
    var sessionID = '';
    for (var i = 0; i < 6; i++) {
      let num = getRandomInt(0, 9).toString();
      sessionID += num;
    }
    setTimeout(() => {
      history.push({
        pathname: '/dashboard',
        state: {
          'sessionID': sessionID,
        }
      });
    }, 1000);
  }

  return (
    <div className="w-full h-full absolute top-0 left-0">
      <div className="w-screen h-screen absolute top-0 left-0">
        <LoadingOverlay
          active={isGenerating}
          spinner
          text='Generating Session...'
        >
          <div className="w-screen h-screen">

          </div>
        </LoadingOverlay>
      </div>

      <div className="w-full h-full absolute top-0 left-0 bg-flutter-deepPurpleAccent">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": false
                }
              },
              "size": {
                "value": 10,
                "random": true
              },
              "move": {
                "direction": "bottom",
                "out_mode": "out"
              },
              "line_linked": {
                "enable": false
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "remove"
                }
              },
              "modes": {
                "remove": {
                  "particles_nb": 10
                }
              }
            }
          }} />
      </div>
      <div className="h-full w-full absolute top-0 left-0 flex flex-row items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-10/12">
            <ReactFloaterJs>
              <img src={Logo} />
            </ReactFloaterJs>
          </div>
          <div>
            <button class="bg-flutter-blue hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 text-5xl focus:outline-none rounded rounded-lg" onClick={handleSessionGeneration}>
              CREATE SESSION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}