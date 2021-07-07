import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import UsersList from './UsersList';
import CommentsList from './CommentsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/users" component={UsersList} />
        <Route path="/comments" component={CommentsList} />
      </div>
    </Router>
  );
}

export default App;
