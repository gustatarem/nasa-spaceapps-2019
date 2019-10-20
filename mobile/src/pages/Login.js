import React, { useState, useEffect } from 'react'
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import api from '../services/api'
import logo from '../assets/logo.png'

export default function Login({navigation}) {
  const [email, setEmail] = useState('')

  // useEffect(() => {
  //   AsyncStorage.getItem('user').then (user => {
  //     if (user) {
  //       navigation.navigate('List')
  //     }
  //   })
  // }, [])

  async function handleSubmit() {
    // const response = await api.post('/sessions', {email})

    // const {_id} = response.data

    // await AsyncStorage.setItem('user', _id)

    navigation.navigate('List')
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <View style={styles.form}>
        <Text style={styles.label}>Seu e-mail *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        >
        </TextInput>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Acessar o app</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30
  },

  label: {
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 8
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 30,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },

  button: {
    height: 42,
    backgroundColor: '#101010',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },

  logo: {
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  }
  

})