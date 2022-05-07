import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['estudar', 'codar', 'comer', 'dormir'];

function App() {
  return (
    <ul>{compromissos.map((compromisso) => Task(compromisso))}</ul>
  );
}

export default App;
