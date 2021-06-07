import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import UsersPost from './components/UsersPost/UsersPost';



function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/users">
          <Users></Users>
        </Route>
        <Route path="/userspost">
          <UsersPost></UsersPost>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
