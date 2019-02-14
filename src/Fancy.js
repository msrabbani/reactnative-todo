import React, { Component}  from 'react'
import {
    View,
    Text
} from 'react-native'

import {styles} from './Styles'

class Fancy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                </View>

                <Text style={styles.text}>Fancy</Text>

            </View>

        )
    }
}


export default Fancy
