import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import {ADD_POST} from './reducers'

const _FetchAPI = (props) => (
        <View>
                {props.datas.map(data => 
                    <Text>{data.name}</Text>
                )}
                <TouchableOpacity onPress={props.addFetchAPIPost}>
                    <Text>
                        Add
                    </Text>
                </TouchableOpacity>
        </View>
)

const mapActionsToProps = (dispatch) => {(
    addFetchAPIPost(data) {
        dispatch({type: 'ADD_POST', payload: data})
    }
)}

const mapStateToProps = (state) => ({
    datas: state.fetchAPI
})

export const FetchAPI = connect(mapStateToProps, mapActionsToProps)(_FetchAPI)


