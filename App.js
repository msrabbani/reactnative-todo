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
  TouchableOpacity,
} from 'react-native';
type Props = {};

export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleTextChange = text => {
    this.setState({
      newTodo: text,
    });
  };
  handlePress = event => {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos,
      newTodo: '',
    });
  };
  render() {
    return (
      <View>

        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleTextChange}
        />

        <TouchableOpacity onPress={this.handlePress}>
          <Text>Create</Text>
        </TouchableOpacity>

        <View>
          {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}

        </View>

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
