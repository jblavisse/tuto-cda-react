import './App.css';
import Question from './Question';

import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Question title="Un titre" />
      <Question title="Un autre titre" />
      <Question title="Truc bidule chouette" />

      <Counter />
      <Counter />
    </div>
  );
}

export default App;
