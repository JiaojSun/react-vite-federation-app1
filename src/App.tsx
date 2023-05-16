// import Button from 'shared/Button'; // TODO
import WebSocketDemo from './components/WebSocketDemo';
import SubmitDataDemo from './components/SubmitDataDemo';
import Button from 'shared/Button';

function App() {
  return (
    <div className="App">
      <Button name="hello" />
      <WebSocketDemo />
      <SubmitDataDemo />
    </div>
  );
}

export default App;
