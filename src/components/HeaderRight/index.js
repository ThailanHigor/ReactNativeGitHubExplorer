import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions, StackActions } from 'react-navigation';

import styles from './styles';

export default class HeaderRight extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    await AsyncStorage.clear();

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Welcome' }),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Icon name="exchange" size={20} style={styles.icon}/>
      </TouchableOpacity>
    )
  }
}
