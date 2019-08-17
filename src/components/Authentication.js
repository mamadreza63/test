import React from 'react';
import Signup from './Signup';
import Signin from './Signin';

class Authentication extends React.Component {

    state = {
        users: {}
    };

    handleSignin = (email, password) => {
        const emailArray = Object.keys(this.state.users);

        if (!email || !password) {
            return 'Please enter email and password'
        } else if (emailArray.indexOf(email) > -1) {
            const user = this.state.users[email];
            if (password === user.password) {
                return undefined;
            }
        }
        return 'Email or password is wrong.'
    }

    handleSignup = (email, password, passwordConfirm) => {
        const emailArray = Object.keys(this.state.users);
        if (!email || !password || !passwordConfirm) {
            return 'Please enter email and password'
        } else if (password !== passwordConfirm) {
            return 'Password does not match'
        } else if (emailArray.indexOf(email) > -1) {
            return 'The email already exist'
        }
        const user = {};
        user[`${email}`] = { password };
        this.setState((prevState) => ({
            users: Object.assign(prevState.users, user)
        }));
    }
    
    render() {
        return (
            <div>
                <Signup handleSignup={this.handleSignup} />
                <hr />
                <Signin handleSignin={this.handleSignin} />
                {console.log(this.state.users)}
            </div>
        );
    }
}

export default Authentication;