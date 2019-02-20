import React from 'react'
import {
    Text, 
    TextInput, 
    View, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native'

export const TodoForm = (props) => (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={props.value}
            onChangeText={props.handleTextChange}
          />

          <TouchableOpacity style={styles.button} onPress={props.handlePress}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>

)

const styles = StyleSheet.create({
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

})

