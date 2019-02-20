import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TodoForm } from './src/TodoForm'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

    /*    componentWillMount() {
        fetch('http://localhost:3000/todos', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(todos => this.setState({todos}))
} */

  handleTextChange = text => {
    this.setState({
      newTodo: text,
    });
  };

    handlePress = () => {
        const todos = [...this.state.todos, this.state.newTodo]
        this.setState({
            todos, newTodo: ''
        })
  };

  render() {
    return (
        <View style={styles.container}>
            <TodoForm 
                handlePress={this.handlePress}
                handleTextChange={this.handleTextChange}
                value={this.state.newTodo}
            />
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
