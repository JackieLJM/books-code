'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = require('react'),
    ReactDOMServer = require('react-dom/server');

var Email = React.createClass({
    displayName: 'Email',

    render: function render() {
        var _React$createElement;

        return React.createElement('input', (_React$createElement = { type: 'email', name: 'email', 'data-info': 'An active email account is needed to gain access.', placeholder: 'Your email', pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$', required: true, title: 'You need to have a working email to gain access.' }, _defineProperty(_React$createElement, 'required', 'required'), _defineProperty(_React$createElement, 'maxlength', '255'), _defineProperty(_React$createElement, 'id', 'email'), _React$createElement));
    }
});

var Pssword = React.createClass({
    displayName: 'Pssword',

    render: function render() {
        var ch = [React.createElement('input', { type: 'password', name: 'password1', required: 'required', placeholder: 'Password', onChange: this.onChange, key: 'password' })];
        if (this.props.twice) {
            ch[1] = React.createElement('input', { type: 'password', onChange: this.onChange, name: 'password2', required: 'required', placeholder: 'Repeat Password', key: 'password2' });
        }

        if (this.props.msg) {
            ch.push(React.createElement(
                'div',
                { className: 'error-message', key: 'error' },
                this.props.msg
            ));
        }

        return React.createElement(
            'div',
            null,
            ch
        );
    }
});

var Login = React.createClass({
    displayName: 'Login',


    render: function render() {
        return React.createElement(
            'form',
            { method: 'post', 'accept-charset': 'utf-8', action: '/u/login' },
            React.createElement(Email, null),
            React.createElement(Pssword, null),
            React.createElement(
                'label',
                { htmlFor: 'remember-me' },
                React.createElement('input', { type: 'checkbox', name: 'remember_me', value: '1', defaultChecked: true, id: 'remember-me' }),
                'Remember me'
            ),
            React.createElement(
                'p',
                null,
                React.createElement(
                    'a',
                    { href: 'register.html', className: 'inlink' },
                    'Register'
                ),
                ' | ',
                React.createElement(
                    'a',
                    { href: '#request-reset-password', className: 'inlink' },
                    'Reset Password'
                )
            ),
            React.createElement(
                'button',
                { type: 'submit' },
                'Login'
            )
        );
    }
});

var Register = React.createClass({
    displayName: 'Register',

    render: function render() {
        return React.createElement(
            'form',
            { method: 'post', 'accept-charset': 'utf-8', action: '/register' },
            React.createElement(Email, null),
            React.createElement(Pssword, { twice: '1', msg: this.props.msg }),
            React.createElement('span', { className: 'col-p100 info' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Submit'
            )
        );
    }

});

module.exports = {
    register: function register(msg) {
        return ReactDOMServer.renderToString(React.createElement(Register, { msg: msg }));
    }
};