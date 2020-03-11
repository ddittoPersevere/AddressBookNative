import React, { Component } from 'react';
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image} from 'react-native';
import {connect} from 'react-redux'

import {login} from '../actions/loginActions'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }
  componentDidUpdate(){
    this.props.creds.token && this.props.navigation.navigate('Home');
  }
  onClickListener = (element) => {
    switch(element){
      case 'login':
        const username = this.state.email
        const password = this.state.password
        this.props.login(username, password).then(() => {
          this.emailInput.clear()
          this.passwordInput.clear()
        }).catch((e) => {
          this.setState({email: '', password: ''})
          console.log(e)
        })
        this.props.navigation.navigate('Home');
        break
      case 'register':
        this.props.navigation.navigate('Signup');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              ref={input => { this.emailInput = input }}
              placeholder="Email"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              ref={input => { this.passwordInput = input }}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        {
          this.props.creds.error &&
          <Text style={styles.loginText}>{this.props.creds.error}</Text>
        }
        
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

const mapDispatchToProps = (dispatch) => ({
  login : (username, password) => dispatch(login(username, password))
})

const mapStatetoProps = (state) => ({
  creds: state.login
})

export default connect(mapStatetoProps, mapDispatchToProps)(Login)