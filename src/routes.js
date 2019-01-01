import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { colors } from 'styles';

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
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.whiteTransparent,
        style: {
          backgroundColor: colors.secundary,
        }
      }

    }),
  },
}, {
  initialRouteName: isLogged ? 'User' : 'Welcome',
  navigationOptions: ({ navigation }) => ({
    headerRight: <HeaderRight navigation={navigation} />,
  })
});


export default createNavigator;
