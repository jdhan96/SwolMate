import React from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first: '',
                    email: '',
                    password: ''};
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign Up</Text>
          <TextInput
            style={signUpStyle.container}
            placeholder="First Name"
            onChangeText={(first) => this.setState({first})}
            value={this.state.first}
          />
          <TextInput
            style={signUpStyle.container}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={signUpStyle.container}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

class Login extends React.Component {
  constructor(props) {
  super(props);
  this.state = {  email: '',
                  password: ''};
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
          <TextInput
            style={signUpStyle.container}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={signUpStyle.container}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    SignUp: {
      screen: SignUp,
    },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'SignUp',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const signUpStyle = StyleSheet.create({
  container: {
    height: 40, borderColor: 'black', borderWidth: 1,
  },
});
