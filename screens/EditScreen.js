import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import {connect} from 'react-redux'
import Form from '../components/Form'
import {editContact} from '../actions/contactActions'

// Component that handles editing Contact using
// <Form /> component.
// When form is submitted, editContact action
// is fired with input contact info, then page is
// 'refreshed' using 'this.props.history.push('/')'

class EditContact extends Component {
    state = {
        name: this.props.contact ? this.props.contact.name : '',
        email: this.props.contact ? this.props.contact.email : '',
        phone: this.props.ontact ? this.props.contact.phone : '',
    }
    
    onSubmit = () => {
        this.props.editContact(this.props.route.params.id, this.state)
        this.props.navigation.navigate('Home');
    }
    render(){
        return (
            <View>
                <View>
                    <Text>Edit Contact</Text>
                    <View>

                <Text>Name</Text>

                <TextInput 
                    name="name" 
                    value={this.state.name} 
                    onChange={(e)=>{
                        this.setState({name: e.nativeEvent.text})
                    }}
                    ref={input => { this.nameInput = input }}
                />

                    {this.state.nError && <Text>{this.state.nError}</Text>}

                    <Text>Email</Text>

                    <TextInput 
                        name="email"
                        value={this.state.email} 
                        onChange={(e)=>{
                            this.setState({email: e.nativeEvent.text})
                        }}
                        ref={input => { this.emailInput = input }}
                    />

                    {this.state.eError && <Text>{this.state.eError}</Text>}
                    
                    <Text>Phone</Text>

                    <TextInput 
                        name="phone" 
                        value={this.state.phone} 
                        onChange={(e)=>{
                            this.setState({phone: e.nativeEvent.text})
                        }}
                        ref={input => { this.phoneInput = input }}
                    />
                    
                    <Button title="Submit"
                        onPress={() => {
                            this.onSubmit()
                        }} 
                    />
                </View>
                    <Button
                      title="Go to Add"
                      onPress={() => {
                        this.props.navigation.navigate('Add');
                      }}
                    />
                </View>
            </View>
        )
    }
}

// finds Contact in state that matches dynamic URL parameter
const mapStateToProps = (state, props) => ({
    contact : state.contacts.find((item) => item.id == props.route.params.id)
})
const mapDispatchToProps = (dispatch) => ({
    editContact : (id, contact) => dispatch(editContact(id, contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditContact)