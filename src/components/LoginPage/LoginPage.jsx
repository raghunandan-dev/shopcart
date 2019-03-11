import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.logout();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit(e){
        e.preventDefault();
        let users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
        let filteredUsers = users.filter(user => {
            return user.username === this.state.username && user.password === this.state.password;
        });

        if (filteredUsers.length) {
            // if login details are valid return user details
            let user = filteredUsers[0];
            const { from } = this.props.location.state || { from: { pathname: "/" } };
            localStorage.setItem('user', JSON.stringify(user));
            this.props.history.push(from);
        } else {
            // else return error
            alert('Username or password is incorrect');
        }
    }

    logout(){
        localStorage.removeItem('user');
    }

    render(){
        return (
            <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label for="username" className="text-info">Username:</label><br/>
                                <input type="text" name="username" id="username" className="form-control" onChange ={(e)=> {this.handleChange(e)}}  />
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label><br/>
                                <input type="text" name="password" id="password" className="form-control" onChange ={(e)=> {this.handleChange(e)}}/>
                            </div>
                            <div className="form-group">
                                <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}
export { LoginPage };
