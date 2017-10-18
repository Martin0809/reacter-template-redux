import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from "./Home";
import Product from "./Product";

import Header from '../components/Header';

import { getUserInfo } from '../actions/common';

class App extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    return (
      <div className="app">
        <Route component={Header} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
        </Switch>
      </div>
    )
  }
}

export default connect(
  state => ({
    userInfo: state.common.userInfo,
  }), {
    getUserInfo,
  }
)(App);
