import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      userName: '',
    };
  }
  addUser() {
    const user = {
      'name': this.state.name,
      'userName': this.state.userName,
      'email': this.state.email
    }
    this.props.navigation.navigate('List', { user: user });
  
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text> ADD USER </Text>
        </View>
        <Text> Name: </Text>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            placeholder="Name"
            value={this.state.name}
            onChangeText={name => {
              this.setState({ name: name });
            }}
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.textInput}
            value={this.state.userName}
            underlineColorAndroid="transparent"
            placeholder="UserName"
              onChangeText={userName => {
              this.setState({ userName: userName });
            }}
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInput}
            value={this.state.email}
            underlineColorAndroid="transparent"
            placeholder="Email"
             onChangeText={email => {
              this.setState({ email: email });
            }}
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text
            style={styles.addButtonText}
            onPress={() => {
              this.addUser();
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textInput: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 70,
    backgroundColor: '#E91E63',
    width: 70,
    height: 70,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});
