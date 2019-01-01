import React, { Component } from 'react';
import 'config/ReactotronConfig';

import { AsyncStorage } from 'react-native';
import createNavigator from 'routes';


export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount(){
    const username = await AsyncStorage.getItem('@Githuber:username');

    this.appLoaded(username);
  }

  appLoaded = (username) =>{
    this.setState({
      userChecked: true,
      userLogged: !!username,
     });
  }

  render(){
    if (!this.state.userChecked) return null;

    const Routes = createNavigator(this.state.userLogged);
    return <Routes />;
  }
}
