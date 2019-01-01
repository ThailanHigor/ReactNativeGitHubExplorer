import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HeaderRight from 'components/HeaderRight';

//paginas
import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';

const createNavigator = (isLogged = false) => createStackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: createBottomTabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }),
  },
}, {
  initialRouteName: isLogged ? 'User' : 'Welcome',
  navigationOptions: ({ navigation }) => ({
    headerRight: <HeaderRight navigation= {navigation} />,
  })
});


export default createNavigator;
