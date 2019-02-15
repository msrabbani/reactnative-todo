import React, { Component } from 'react'
import { View, Text } from 'react-native'

class FetchAPI extends Component {

    constructor(){
        super()
        this.state = {
            apiDatas: [] 
        }
    }

    componentDidMount() {
        fetch('https://www.balldontlie.io/api/v1/teams', {
            Accept:'application/json'
        }) 
            .then(res => res.json())
            .then(datas => {
                this.setState({
                    apiDatas: datas.data
                }) 
            })
    }


    render() {
        return(
            <View>
                {this.state.apiDatas.map(data=>(
                <Text key={data.id}>{data.name}</Text>
                ))}
                <Text>

                </Text>
            </View>

        )
    }
}

export default FetchAPI
