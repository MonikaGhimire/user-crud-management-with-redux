import React, { Component } from 'react';
import * as actions from '../../store/actions/main';
import './_AddUser.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import validateInput from '../../components/UI/validation/Validation';

class AddUser extends Component {
    state = {
        user: {},
        errors: {
            firstNameError: null,
            lastNameError: null,
            emailError: null,
            addressError: null
        }
    };

    validateAField = (field, value) => {
        let isFieldValid = true;
        switch (field) {
            case 'firstName': {
                let errors = {...this.state.errors}
                if (this.isValueEmpty(value)) {
                    errors.firstNameError = 'First name is required!';
                    this.setState({ errors: errors });
                    isFieldValid = false;
                }
                else {
                    errors.firstNameError = null;
                    this.setState({
                        errors: errors
                    });
                }
                break;
            }
            case 'lastName': {
                let errors = { ...this.state.errors };
                if (this.isValueEmpty(value)) {
                    errors.lastNameError = 'Last name is required!';
                    this.setState({ errors });
                    isFieldValid = false;
                } else {
                    errors.lastNameError=null;
                    this.setState({errors: errors });
                }
                break;
            }

            case 'email': {
                let errors = { ...this.state.errors };
                if (this.isValueEmpty(value)) {
                    errors.emailError = 'Email is required!';
                    this.setState({errors: errors});
                    isFieldValid = false;
                } else if (!this.emailIsValid(value)) {
                    errors.emailError = 'Invalid email address!';
                    this.setState({errors: errors});
                }
                else {
                    errors.emailError = null;
                    this.setState({errors: errors});
                }
                break;
            }

            case 'address': {
                let errors = { ...this.state.errors };
                if (this.isValueEmpty(value)) {
                    errors.addressError= 'Address is required!';
                    this.setState({errors: errors });
                    isFieldValid = false;
                } 
                else {
                    errors.addressError= null;
                    this.setState({errors: errors });
                }
                break;
            }
        }

        return isFieldValid;
    }



    isValueEmpty = (value) => {
        return !value;
    }

     emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }


    addUserHandler = () => {
        this.props.onAddingUser(this.state.user, this.props.history);
    };

    handleChange = (event) => {
        event.preventDefault();

        let isValid = this.validateAField(event.target.name, event.target.value);
        if (!isValid) {
            return;
        }

        let user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user: user });
    }

    render() {
        return (
            <div>
                <form className="AddForm">
                    <h3>Add user:</h3>
                    <div className="from-group">
                        <input onChange={this.handleChange} type="text" onBlur={this.validateFirstName} className="form-control" name="firstName" id="firstName" placeholder="Enter first name" />
                        {this.state.errors.firstNameError ? <label className="Errors">{this.state.errors.firstNameError}</label> : null}
                        <input onChange={this.handleChange} type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter last name" />
                        {this.state.errors.lastNameError ? <label className="Errors">{this.state.errors.lastNameError}</label> : null}
                        <input onChange={this.handleChange} type="email" className="form-control" name="email" id="email" placeholder="me@example.com" />
                        {this.state.errors.emailError ? <label className="Errors">{this.state.errors.emailError}</label> : null}
                        <input onChange={this.handleChange} type="text" className="form-control" name="address" id="address" placeholder="Enter address" />
                        {this.state.errors.addressError ? <label className="Errors">{this.state.errors.addressError}</label> : null}
                    </div>
                    <button type="button"
                        className="btn btn-primary button"
                        onClick={this.addUserHandler}>Add user</button>
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
        onAddingUser: (user, history) => dispatch(actions.addUser(user, history))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddUser));