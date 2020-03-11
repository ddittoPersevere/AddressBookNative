import React from 'react'
import {connect} from 'react-redux'
import { Text, Button, View, TouchableHighlight } from 'react-native';
import Contact from './Contact'
import filterContacts from '../selectors/selectors'
import { sortByName, sortByEmail } from '../actions/filterActions'

// Component that renders Contacts.
// 'Sort by Name' and 'Sort by Email' buttons fire
// actions that modify 'filter' state. 
// Filtered Contacts are mapped through, and their 
// details are passed to <Contact /> component

const ContactList = (props) => (
    <View>
        {/* If contacts belong to user, they are displayed.
        If not, 'No contacts' is displayed. */}
        {props.contacts.length > 0 ?
        <View>
            <Button title="Sort By Name" onPress={(e) => props.dispatch(sortByName())} />
            <Button title="Sort By Email" onPress={(e) => props.dispatch(sortByEmail())} />
        </View>
        :
        <Text>No contacts.</Text> }
        {console.log(props)}
            {
                props.contacts.map((item) =>
                    (
                        <TouchableHighlight key={item.id} onPress={(e) => props.navigation.navigate('Login', {
                            id: item.id
                        })}>
                            <Contact {...item}/>
                        </TouchableHighlight>
                    )
                )
            }
    </View>
)

// Pulls Contacts from 'contact' state, and uses
// 'filter' state to filter/sort them
const mapStatetoProps = (state) => ({
    contacts: filterContacts(state.contacts, state.filters)
})

export default connect(mapStatetoProps)(ContactList)