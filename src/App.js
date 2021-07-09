import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import UserListPage from './pages/UserListPage';
import CommentListPage from './pages/CommentListPage';
import PostListPage from './pages/PostListPage';
import PostDetailsPage from './pages/PostDetailsPage';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/posts">Mes articles</NavLink>
          <NavLink to="/comments">Mes commentaires</NavLink>
          <NavLink to="/users">Mes utilisateurs</NavLink>
          <NavLink to="/tasks">Mes tâches</NavLink>
        </nav>

        <Switch>
          <Route path="/users" component={UserListPage} />
          <Route path="/comments" component={CommentListPage} />

          <Route path="/posts/:id" component={PostDetailsPage} />
          <Route path="/posts" component={PostListPage} />

          <Route path="/tasks" component={TaskPage} />

          <Route path="/" component={HomePage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
