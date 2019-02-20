import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TodoForm } from './src/TodoForm'
import { connect } from 'react-redux'

export default class App extends Component {
  static defaultProps = {todos: []}

  constructor() {
    super();
    this.state = {
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
        //const todos = [...this.state.todos, this.state.newTodo]
        this.props.createTodo(this.state.newTodo)
        this.setState({
            newTodo: ''
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
          {this.props.todos.map((todo, i) => (
            <View key={i} style={styles.todo}>
              <Text style={styles.todoText}>{todo}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const mapActionsToProps = (dispatch) => ({
    createTodo(todo) {
        dispatch({type: 'CREATE_TODO', payload: todo})
    }
})

const mapStateToProps = (state) => ({
    todos: state.todos
})

export const Todo = connect(mapStateToProps, mapActionsToProps)(App)

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
