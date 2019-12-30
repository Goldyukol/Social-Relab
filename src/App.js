import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/appReducer';
import { withSuspense } from './components/hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialize) {
      return <Preloader />
    }
    return (
      <Switch >
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Redirect from='/' to='/profile' />
            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/music' component={Music} />
            <Route path='/news' component={News} />
            <Route path='/setting' component={Settings} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialize
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)
