import React, { Component } from 'react';
import * as action from '../../store/actions/main';
import { connect } from 'react-redux';
import '../AddUser/_AddUser.scss';
import { withRouter } from 'react-router-dom';

class UpdateUser extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        let user = this.props.users.find(oneUser => {
            return oneUser.id + '' === userId
          });
        this.setState({user: user});
    }

    updateUserHandler = () => {
        this.props.onUpdatingUser(this.state.user.id, this.state.user, this.props.history);
    }

    handleChange = (event) => {
        let user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user: user});
    }

    render() {
        return (
            <div>
                <form className="AddForm">
                <h3>Update User: </h3>
                <div className="from-group">
                    <input onChange={this.handleChange} type="text" defaultValue={this.state.user.firstName} className="form-control" name="firstName" id="firstName" placeholder="Enter first name" />
                    <input onChange={this.handleChange} type="text" defaultValue={this.state.user.lastName} className="form-control" name="lastName" id="lastName" placeholder="Enter last name" />
                    <input onChange={this.handleChange} type="email" defaultValue={this.state.user.email} className="form-control" name="email" id="email" placeholder="Enter email" />
                    <input onChange={this.handleChange} type="text" defaultValue={this.state.user.address} className="form-control" name="address" id="address" placeholder="Enter address" />
                </div>

                    <button type="button" 
                    className="btn btn-primary button"
                    onClick={this.updateUserHandler}>Update user</button>
            </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
       onUpdatingUser: (id, user, history) => dispatch(action.updateUser(id, user, history))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateUser));