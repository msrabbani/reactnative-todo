import React from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'

const _FetchAPI = (props) => (
        <View>
                {props.datas.map(data => 
                    <Text>{data.name}</Text>
                )}

        </View>
)

const mapStateToProps = (state) => ({
    datas: state.fetchAPI
})

const FetchAPI = connect(mapStateToProps)(_FetchAPI)

export default FetchAPI
