// In App.js in a new project

import * as React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { setContacts } from './actions/contactActions'
import { _login } from './actions/loginActions'
import Home from './screens/HomeScreen'
import Login from './screens/LoginScreen'
import Signup from './screens/SignupScreen'
import Search from './screens/SearchScreen'
import Edit from './screens/EditScreen'
import Add from './screens/AddScreen'
import storeCreator from './store/configureStore'

const Stack = createStackNavigator();

// uses function in 'configureStore.js' to create store
const store = storeCreator()
console.log(store.getState())
store.subscribe(() => {
    // logs state after any changes occur
    const state = store.getState()
    console.log(state)
})

let MyComponent = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" options={{
        headerTitle: "Address",
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
          ),
        }} component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  </NavigationContainer>
)

const mapStateToProps = (state) => ({
  login : state.login
})

const mapDispatchToProps = (dispatch) => ({
  _login : (token, username, error) => dispatch(_login(token, username, error)),
  setContacts : () => dispatch(setContacts())
})

MyComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponent)

class App extends React.Component {
  componentDidMount(){
    // if(AsyncStorage.getItem('userToken')){
    //   let token =  AsyncStorage.getItem('jwt')
    //   let username =  AsyncStorage.getItem('userName')
    //     this.props._login(token, username, undefined)
    //     this.props.setContacts()
    // }
  }
  render(){
    return (
      <Provider store={ store }>
        <MyComponent />
      </Provider>  
    );
  }
}

export default App