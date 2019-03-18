import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/main';

class DeleteUserModal extends Component {
  state = {
    open: true
  };

  onCloseModal = () => {
    this.props.history.push("/");
    this.setState({ open: false });

  };

  deleteUserHandler = () => {
    let userId = this.props.match.params.userId;
    this.props.onDeletingUser(userId, this.props.history);
  };

  render() {

    return (
      <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <p style={{ textAlign: 'center', marginTop: '20px' }}> Are you sure you want to delete this user? </p>
        
          <button type='button' className="btn btn-primary" onClick={this.deleteUserHandler}>Yes</button>
        
          <button onClick={this.onCloseModal}style={{ marginLeft: '10px' }} className="btn btn-danger">No</button>
      </Modal>
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
    onDeletingUser: (id, history) => dispatch(actions.deleteUser(id, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserModal);