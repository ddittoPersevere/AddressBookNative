import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {connect} from 'react-redux'
import Form from '../components/Form'
import {editContact} from '../actions/contactActions'

// Component that handles editing Contact using
// <Form /> component.
// When form is submitted, editContact action
// is fired with input contact info, then page is
// 'refreshed' using 'this.props.history.push('/')'

class EditContact extends Component {
    ID = this.props.navigation.state.id
    state = {
        contact : this.props.contacts.find((item) => item.id == ID),
        name: this.state.contact ? this.state.contact.name : '',
        email: this.state.contact ? this.state.contact.email : '',
        phone: this.state.contact ? this.state.contact.phone : '',
    }
    
    onSubmit = (contact) => {
        this.props.editContact(this.props.match.params.id, contact)
        // this.props.history.push('/')
    }
    render(){
        const { params } = this.props.navigation.state;
        const ID = params ? params.itemId : null;
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
                            this.validate()
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
const mapStateToProps = (state) => ({
    contacts : state.contacts
})
const mapDispatchToProps = (dispatch) => ({
    editContact : (id, contact) => dispatch(editContact(id, contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditContact)