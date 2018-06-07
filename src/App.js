import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header, {HeaderLogo, HeaderUserPanel} from './components/Headers';
import PageNav, { routes } from './containers/Navigation'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoading: false
      }
  }

  componentDidMount() {
      this.setState({isLoading: true});
  }

  render() {
    return (
      <Router>
          <div className="wrapper">
              <Header header={(<HeaderLogo head="DTS" tail=""/>)}>
                  <HeaderUserPanel userName="test" userRole="testRole"/>
              </Header>

              <PageNav/>
              {
                  routes.map((route, index) => (
                      <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.component}
                      />
                  ))
              }

              <footer className="main-footer">
                  <strong>Copyright © 2018 <a href="http://daum.net">DTS</a>.</strong>
                  &nbsp;
                  All rights reserved.
              </footer>
          </div>
      </Router>
    );
  }
}

export default App;
