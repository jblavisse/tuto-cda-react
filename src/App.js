import './App.css';
import Question from './Question';
import Counter from './Counter';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Question title="Un titre" />
      <Question title="Un autre titre" />
      <Question title="Truc bidule chouette" />

      <Counter />
      <Counter />
      
      <Form />
    </div>
  );
}

export default App;
