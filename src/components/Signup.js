import React from 'react';
import Error from './Error';

export default class Signup extends React.Component {

    state = {
        error: undefined
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const passwordConfirm = e.target.elements.passwordConfirm.value;
        const error = this.props.handleSignup(email, password, passwordConfirm);
        this.setState({ error });
        if (!error) {
            e.target.elements.email.value = '';
            e.target.elements.password.value = '';
            e.target.elements.passwordConfirm.value = '';
        }
    }
    render() {
        return (
            <div>
                <Error error={this.state.error} />                
                <form onSubmit={this.handleOnSubmit}>
                    <label>Email: </label>
                    <input type="email" name="email" /><br />
                    <label>Password: </label>
                    <input type="text" name="password" /><br />
                    <label>Password Confirm: </label>
                    <input type="text" name="passwordConfirm" /><br />
                    <button>Signup</button>
                </form>
            </div>
        );
    }
}