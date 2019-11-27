import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/setting' component={Settings} />
          <Route path='/users' render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>);

}

export default App;
