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
      <View style={styles.container}>

        <View style={styles.form}>

          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleTextChange}
          />

          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View key={i} style={styles.todo}>
              <Text style={styles.todoText}>{todo}</Text>
            </View>
          ))}

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
    fontSize: 18,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'green',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  todos: {
    marginTop: 30,
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  todoText: {
    fontSize: 18,
  },
});
