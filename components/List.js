import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      isLoading: true,
      searchText: '',
      images: null,
    };
  }
  componentDidMount() {
    console.log(this.state.users); 

  }

  componentWillMount() {

    if (this.state.users) {
      console.log(this.state.users);
    }
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ users: responseJson, isLoading: false });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentWillUpdate() {
    if (
      this.props.navigation &&
      this.props.navigation.state &&
      this.props.navigation.state.params
    ) {
      const user = this.props.navigation.state.params.user;

      if (user) {
        console.log('Asd');
      }
    }
  }
  displayUsers() {
    // set images

    let count = 0; // max 3 images
    return this.state.users.map((user, i) => {
      let imageNum = (i % 2) + 1;
      return (
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('User', { user: user })}
          underlayColor="white">
          <View key={i} style={styles.user}>
            <View style={styles.leftContainer}>
              <Image
                style={{ width: 70, height: 70 }}
                source={{
                  uri:
                    'https://bootdey.com/img/Content/user_' + imageNum + '.jpg',
                }}
              />
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.name}>{user.name}</Text>
              <View>
                <Text>Email: {user.email}</Text>
                <Text>Phone: {user.phone}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      );
    });
  }

  addUser(user) {
    let tempUsers = this.state.users;

    console.log('tempUsers ', tempUsers);

    if (tempUsers) {
      tempUsers.push(user);
      this.setState({ users: tempUsers });
      console.log('tempUsers ', tempUsers);
    }
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="KAKAKA" />
        <ScrollView>{this.displayUsers()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    borderBottomWidth: 10,
    borderBottomColor: '#87DEEB',
    flexDirection: 'row',
    height: 90,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  leftContainer: {
    flex: 1,
  },
  textInput: {
    height: 40,
  },
  rightContainer: {
    paddingLeft: 5,
    flex: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#444',
  },
});
