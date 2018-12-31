import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <Text style={styles.title}> Bem-vindo</Text>
    <Text style={styles.text}>
      Para continuar, precisamos que você informe seu usuário no GitHub
    </Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário"
        underlineColorAndroid="rgba(0,0,0,0)"
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>


    </View>

  </View>
);
export default Welcome;

Welcome.navigationOptions = { header: null };
