import React , {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {CardContainer, CardSection, Input, Button, Spinner } from './utils';
import {
  emailChanged,
  passwordChanged,
  loginUser,
} from './../redux/actions/index.js';

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  };

  onButtonPress() {
    this.props.loginUser(this.props.email, this.props.password);
  };

  renderLoginButton() {
    if (this.props.loading)
      return <Spinner />
    return (<Button onPress={this.onButtonPress.bind(this)}>Login</Button>);
  }

  render() {
    console.log(this.props);
    return (
      <CardContainer>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={{color: '#f00', alignSelf: 'center'}}>{this.props.error}</Text>

        <CardSection>
          {this.renderLoginButton()}
        </CardSection>
      </CardContainer>
    );
  }
};

const mapStateToProps = (state) => {
  const { email, password, error, loading} = state.authentication
  return {email, password, error, loading};
};

const mapDispatchToProps = () => {}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
