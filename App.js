/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
type Props = {};

export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      todos: [1, 2, 3],
      newTodo: '',
    };
  }
  handleInputChange = event => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  handlePress = press => {};
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <TouchableHighlight onPress={this.handlePress}>
          <Text>tap me!</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
