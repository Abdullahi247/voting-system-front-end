
import Axios from "axios"

import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';


function Auth(ComponentToProtect) {
    class App extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
                user_name: "",
                firstname: '',
                lastname: '',
                company: ''
            };
        }

        componentDidMount() {
            const accessToken = localStorage.getItem('userToken')
            Axios.get(`https://votingsystem.onrender.com/authentication/gateway/authentication/authorization`, { headers: {"Access-Control-Allow-Origin": "*",  Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json", } })
                .then(res => {
                    if (res.status === 200) {
                        this.setState({ loading: false });
                        this.setState({
                            user_name: res.data.firstname,
                            firstname: res.data.firstName,
                            lastname: res.data.lastName,
                            company: res.data.company
                        })
                    }
                    else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    this.setState({ loading: false, redirect: true });
                });
        }
        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return;
            }
            else if (redirect) {
                return <Navigate to="/login" />;
            }
            else {
                // return <ComponentToProtect {...this.props} firstName={this.state.firstname} lastName={this.state.lastname} company={this.state.company} />
                return <ComponentToProtect  />
            }
        }
    }

    return (
        <div>
            <App />
        </div>
    )
}

export default Auth