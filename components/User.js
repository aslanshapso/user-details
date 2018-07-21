import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

export default class UserScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  render() {
    const user = this.props.navigation.state.params.user;
    return (
      <View style={styles.container}>
        <Text style={styles.userDetails} />
        <Text style={styles.userName}>
          <Text style={styles.firstLetter}>
            {user.name.slice(0, 1).toUpperCase()}
          </Text>
          <Text> {user.name.slice(1, user.name.length)}</Text>
        </Text>
        <View style={styles.textContainer}>
          <View style={styles.leftContainer}>
            <Text>UserName: </Text>
            <Text>{user.username}</Text>
            <Text>Email:{user.email}</Text>
          </View>
          <View style={styles.rightContainer}>
            <View>
              <Text>User Address</Text>
              <Text>
                Full: {user.address.street} - {user.address.suite},{user.address.city}
              </Text>
            </View>
            <Text>Phone: {user.phone}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    height: 100,
  },
  userName: {
    fontSize: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#888',
  },
  firstLetter: {
    fontSize: 45,
    color: 'red',
  },
  
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    paddingLeft: 5,
    flex: 1,
    borderLeftWidth: 4,
    borderLeftColor: "#444"
  },
});
