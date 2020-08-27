import React from 'react';
import './App.css';
import GlobalStateProvider from "./store/GlobalStateProvider";
import Nav from "./components/Nav";
import DownloadImage from "./components/DownloadImage";
import LoginNotification from "./components/LoginNotification";

export default function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Nav />
        <h1>Download Image</h1>
        <DownloadImage />
        <LoginNotification />
      </div>
    </GlobalStateProvider>
  );
}
