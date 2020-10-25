import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <head>
        <title>Ebmedded WebAR Experience through echoAR</title>
        <style>
            background {
                top: 0;
                left: 0;
                position: fixed;
                width: 100%;
                height: 100%;
                background-color: rgb(0, 45, 100);
                z-index: -1;
            },
            h1 {
                position: relative;
                color: white;
                text-align: center;
                font-size: 5vh;
		            font-family: Arial, Helvetica, sans-serif;
            }
            iframe {
                position: relative;
                width: 100%;
                height: 75vh;
            }
        </style>
    </head> */}
    <body>
	    <div id="background"></div>
        <h1>Ebmedded WebAR Experience through echoAR</h1>
          <iframe
            src="https://console.echoAR.xyz/webar?key=shrill-surf-7760&entry=376f72fb-4fd3-4192-8bd2-aa3e875297e7"
            title="echoAR WebAR iframe element">
          </iframe>
    </body>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
