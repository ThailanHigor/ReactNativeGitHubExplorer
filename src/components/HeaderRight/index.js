import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HeaderRight extends Component{
  signOut = () => {

  }

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Icon name="exchange" size={20} style={styles.icon}/>
      </TouchableOpacity>
    )
  }
}
