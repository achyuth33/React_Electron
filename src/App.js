
import React from 'react';
import './App.css';
import { Navbar, Button, Alignment, Icon } from '@blueprintjs/core';

function App() {
  const onSnipClick = () => {
    console.log('todo: making screenshot');
  };

  return (
    <div className="App">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Electron Snip</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="settings" 
              text="Settings" />
          <Button className="bp3-minimal" icon="help" text="About" />
          <Button
            className="bp3-minimal"
            icon="camera"
            text="Snip"
            onClick={onSnipClick}
          />
        </Navbar.Group>
      </Navbar>

      <main className="App-main">
        <Icon icon="camera" iconSize={100} />
        <p>Electron Snip</p>
      </main>
    </div>
  );
}

export default App;