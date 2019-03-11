import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <p>You're logged in with React & Basic HTTP Authentication!!</p>
                <h3>Users from secure api end point:</h3>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export { HomePage };
