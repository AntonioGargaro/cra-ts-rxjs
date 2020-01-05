import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonBasicObservable from './components/ButtonBasicObservable';

const App: React.FC = () => {
  const [buttonBasicObservableShouldRender, setButtonBasicObservableShouldRender] = useState(true);

  useEffect(() => {
    // Render button after it has unrendered
    if (!buttonBasicObservableShouldRender) setTimeout(() => setButtonBasicObservableShouldRender(true), 3000);
  }, [buttonBasicObservableShouldRender]);

  const basicOberservable = buttonBasicObservableShouldRender && (
    <ButtonBasicObservable setShouldRender={setButtonBasicObservableShouldRender} />
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Typescript Application.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <section>{basicOberservable}</section>
    </div>
  );
};

export default App;
