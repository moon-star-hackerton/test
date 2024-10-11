import logo from './logo.svg';
import './App.css';
import { SerialPort } from 'serialport';

async function App() {
  if ("serial" in navigator) {
    const port = navigator.serial.requestPort();
    await port.open({baudRate: 9600});

    const reader = port.readable.getReader();
    const it = await reader.read();
    console.log('value', it);
  } else {
    console.log('답없다 포기하자');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
