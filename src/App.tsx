import React from 'react';
import './App.css';

import Navigator from './navigation/Navigator'

const App: React.FC = () => {
  return (
    <div style={{height: "100%"}} className="App">
      <Navigator />
    </div>
  );
}

export default App;