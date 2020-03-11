import React from 'react'
import {connect} from 'react-redux'
import { Text, Button, View } from 'react-native';
import { removeContact } from '../actions/contactActions'

// Component that holds inViewidual Contacts.
// Clicking on 'name' of contact will lead to edit page
// for that contact.
// Clicking on 'remove' will fire 'removeContact' action.

const Contact = ({name, email, phone, id, ...props}) => (
        <View>
            <View>
                {/* <Button title={name} onClick={
                (e) => {
                    this.props.navigation.navigate('Search');
                }
                } /> */}

                <Text>{name}</Text>

                {/* <Button title="Remove" onClick={
                (e) => {
                    props.dispatch(removeContact({id}))
                }
                } /> */}
            </View>
            <View>
                <Text>{email}</Text>
                

            </View>
            <View>
                {
                    phone != undefined && <Text>{phone}</Text>
                }
            </View>
        </View>
)

export default connect()(Contact)