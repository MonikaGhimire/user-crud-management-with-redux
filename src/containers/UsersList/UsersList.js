import React, { Component } from 'react';
import './_usersList.scss';
import Button from '../../components/UI/buttons/Button';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/main';
import Spinner from '../../components/UI/Spinner/Spinner';

class UsersList extends Component {

    componentDidMount() {
        this.props.onFetchUsers();
    }

    render() {
        let List = (
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>
                                <NavLink to={`/update-user/${user.id}`}>
                                    <button className="btn btn-info"
                                        style={{ marginRight: '10px' }} >Update</button>
                                </NavLink>
                                <NavLink to={`/delete-user/${user.id}`}>
                                    <button className="btn btn-danger">Delete</button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );

        if (this.props.loading) {
            List = <Spinner />
        }
        return (
            <div>
                <h3>All users:</h3>
                <NavLink to="/add-new-user"><Button >Add new user</Button></NavLink>
                {List}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);