import React from 'react';
import Logo from '../../assets/images/logo_white1.png';

export default function Navbar(props) {
  return (
    <header className="text-gray-700 body-font bg-flutter-purple">
      <div className="flex flex-wrap flex-col px-16 py-4 md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <div className="md:w-4/12">
          <img src={Logo} />
        </div>
        </a>
        <div className="text-white font-bold text-2xl">
          Session: {props.sessionID}
        </div>
      </div>
    </header>
  );
}