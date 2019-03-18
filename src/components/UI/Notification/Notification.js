import React from 'react';
import './Notification.css';
import { connect } from 'react-redux';

const Notification = (props) => {
    if (props.display) {
        return ( 
            <div className="Notification">
                <label style={{color: 'red', fontSize: '15px'}}>{props.errorMessage}</label>
            </div>
         );  
    };

    return null;
}

const mapStateToProps = state => {
    return {
        errorMessage: state.notification.messages[0],
        display: state.notification.display
    }
}
 
export default connect(mapStateToProps)(Notification);