import React from 'react';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'
import { Image, StyleSheet, TextInput, Button, View, Text } from 'react-native';
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
            keyboardType={'email-address'}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={signUpStyle.container}
            placeholder="Password"
            secureTextEntry={true}
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
            keyboardType={'email-address'}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={signUpStyle.container}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

class Coach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  name: '',
                  gym: '',
                  location: '',
                  pay: '',
                  rate: 2.7,
                  bio: '',
                  filters: ''};

  }

  render() {
    return (
      //card view
      <View style={{flexDirection: 'column'}}>
        //image
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://pbs.twimg.com/profile_images/344513261579284169/33463ce370b5e1702393ca16a4cad5e6_400x400.jpeg'}}
          />
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        //info
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Name</Text>
            <Text>
              {this.state.name}
            </Text>
            <Button
              title="Edit"
              onPress={() => this.props.navigation.navigate('Edit')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Gym</Text>
              <Text>
                {this.state.gym}
              </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Location</Text>
              <Text>
                {this.state.location}
              </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        //pay rate and rating
        <View style={{flexDirection: 'column'}}>
          //pay rate
          <View style={{flexDirection: 'row'}}>
            <Text>Pay Rate</Text>
              <Text>
                {this.state.pay}
              </Text>
          </View>
          //rating
          <StarRatingBar
            score={this.state.rate}
            allowsHalfStars={true}
            accurateHalfStars={true}
          />
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        //Bio
        <View style={{flexDirection: 'column'}}>
          <Text>Bio</Text>
          <Text>{this.state.bio}</Text>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        //Filter
        <View style={{flexDirection: 'column'}}>
          <Text>Filter</Text>
          <Text>{this.state.filter}</Text>
        </View>
      </View>


    );
  }
}

class Trainee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  name: '',
                  gym: '',
                  location: '',
                  goal: '',
                  bio: '',
                  filters: ''};

  }

  render() {
    return (
      //card view
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        //image
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://pbs.twimg.com/profile_images/344513261579284169/33463ce370b5e1702393ca16a4cad5e6_400x400.jpeg'}}
          />
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        //info
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Name</Text>
            <Text>
              {this.state.name}
            </Text>
            <Button
              title="Edit"
              onPress={() => this.props.navigation.navigate('Edit')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Gym</Text>
              <Text>
                {this.state.gym}
              </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Location</Text>
              <Text>
                {this.state.location}
              </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        //fitness goal
        <View style={{flexDirection: 'column'}}>
            <Text>Fitness Goal</Text>
            <Text>
              {this.state.goal}
            </Text>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        //Bio
        <View style={{flexDirection: 'column'}}>
          <Text>Bio</Text>
          <Text>{this.state.bio}</Text>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        //Filter
        <View style={{flexDirection: 'column'}}>
          <Text>Filter</Text>
          <Text>{this.state.filter}</Text>
        </View>
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
    Coach: {
      screen: Coach,
    },
    Trainee: {
      screen: Trainee,
    },
  },
  {
    initialRouteName: 'Coach',
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
