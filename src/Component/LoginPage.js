import React, { Component } from 'react';
import ShowData from './ShowData'
import {Button} from 'react-bootstrap'


export class LoginPage extends Component {
    userData;
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email
            })
        } else {
            this.setState({
                email: '',
                
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));     
    }
    
    onSubmit() {
        console.log(localStorage.getItem('user'))
    } 
    render() {
        return (
            <div className='container1'>
                <div className='heading'>
                    <h1 >Think for better<br /> tommorow</h1>
                </div>

                <form>
                    <h3>Login to continue</h3>
                    <input type='email' placeholder='Email Id' value= {this.state.email} onChange={this.onChangeEmail}></input>
                    <br />
                    <input type='password' placeholder='Password'></input>
                    <br />
                    <Button onClick={this.onSubmit} className='LoginButton'>Login</Button>
                </form>
            </div>
        )
    }
}

export default LoginPage
