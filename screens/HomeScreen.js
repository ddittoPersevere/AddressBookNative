import * as React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { connect } from 'react-redux'
import ContactList from '../components/ContactList'

const Home = (props) => {
  !props.login.token && props.navigation.navigate('Login');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <ContactList navigation={props.navigation} />
      <Button
        title="Go to Search"
        onPress={() => {
          props.navigation.navigate('Search');
        }}
      />
    </View>
  );
}

Home.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => ({
  login : state.login
})

export default connect(mapStateToProps)(Home)