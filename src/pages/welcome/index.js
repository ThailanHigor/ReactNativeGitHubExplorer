import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import { View, Text, TextInput, TouchableOpacity,
        StatusBar, ActivityIndicator, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import api from 'services/api';

import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = { header: null };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    loading: false,
    errorMessage: null,
  }

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  }

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  }

  singIn = async () => {
    const { username } = this.state;

    if (username.length === 0) return;

    this.setState({ loading: true });
    try {
      await this.checkUserExists(username);

      await this.saveUser(username);

      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'User' }),
        ],
      });

      this.props.navigation.dispatch(resetAction);
    } catch (err) {
      this.setState({ loading: false, errorMessage: 'Usuário não existe.' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar, precisamos que você informe seu usuário no GitHub
        </Text>

        {
          !!this.state.errorMessage
          && <Text style={styles.error}>{ this.state.errorMessage }</Text>
        }

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="rgba(0,0,0,0)"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />

          <TouchableOpacity style={styles.button} onPress={this.singIn}>
            { this.state.loading
              ? <ActivityIndicator size="small" color="#FFF" />
              : <Text style={styles.buttonText}>Prosseguir</Text>
            }
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
