import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import {connect} from 'react-redux'
import ContactList from '../components/ContactList'
import { setNameFilter, setEmailFilter, setPhoneFilter } from '../actions/filterActions'

const Search = (props) => {
    return (
      <View>
        <Text>Search</Text>
          <View>
            <View>
                <View>
                    <TextInput name="name" placeholder="Name Filter" onChange={(event) => {
                      props.dispatch(setNameFilter(event.nativeEvent.text))
                    }}/>
                    <TextInput name="email" placeholder="Email Filter" onChange={(event) => {
                      props.dispatch(setEmailFilter(event.nativeEvent.text))
                    }}/>
                    <TextInput name="phone" placeholder="Phone Filter" onChange={(event) => {
                      props.dispatch(setPhoneFilter(event.nativeEvent.text))
                    }}/>
                </View>
                <ContactList />
            </View>
          </View>
        <Button
        title="Go to Edit"
        onPress={() => {
          props.navigation.navigate('Edit');
        }}
      />
      </View>
    );
}

export default connect()(Search)