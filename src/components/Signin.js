import React from 'react';
import Error from './Error';

export default class Signin extends React.Component {

    state = {
        error: undefined
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const error = this.props.handleSignin(email, password);
        this.setState({ error });
        if (!error) {
            e.target.elements.email.value = '';
            e.target.elements.password.value = '';
        }
    }

    render() {
        return (
            <div>
                <Error error={this.state.error} />
                <form onSubmit={this.handleOnSubmit}>
                    <label>ایمیل :</label>
                    <input type="email" name="email" /><br />
                    <label>پسورد :</label>
                    <input type="text" name="password" /><br />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}