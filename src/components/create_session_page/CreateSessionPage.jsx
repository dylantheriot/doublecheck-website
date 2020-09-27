import React from 'react';
import Particles from 'react-particles-js';
import ReactFloaterJs from 'react-floaterjs'
import Logo from '../../assets/images/logo_white1.png';

export default function CreateSessionPage() {
  return (
    <div className="w-full h-full absolute top-0 left-0">
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
            <button class="bg-flutter-blue hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 text-5xl focus:outline-none rounded rounded-lg">
              CREATE SESSION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}