import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';


// const Header = () => <h2>Header</h2>
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
// const Dashboard = () => <h2>Dashboard</h2> // this is a dummy component
// const SurveyNew = () => <h2>SurveyNew</h2>
// const Landing = () => <h2>Landing</h2>



class App extends Component {
  componentDidMount(){
    this.props.fetchUser();

  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null,actions)(App);
