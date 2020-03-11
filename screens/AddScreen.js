import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {connect} from 'react-redux'


import Form from '../components/Form'

const Add = (props) => {
    // this.onSubmit = (contact) => {
    //   props.addContact(contact)
    // }

    return (
      <View>
        <Text>Add Contact</Text>
        <Form />
        <Button
        title="Go to Login"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
        />
      </View>
    );
}

// const mapStateToProps = (state, props) => ({
//   contact : state.contacts.find((item)=> item.id === props.match.params.id)
// })
// const mapDispatchToProps = (dispatch) => ({
//   addContact : (contact) => dispatch(addContact(contact))
// })

export default connect()(Add)