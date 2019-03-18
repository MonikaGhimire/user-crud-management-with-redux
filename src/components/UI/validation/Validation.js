import React from 'react';

export const validateFirstName = (data) => {
    if(data.firstName === "" || data.firstName === undefined || data.firstName === null) {
        return <label 
        style={{color: 'red', fontSize: '5px'}}>
        First name is required!</label>
    } 
};

export const validateLastName = (data) => {
    if(data.lastName === "" || data.lastName === undefined || data.lastName === null) {
        return <label 
        style={{color: 'red', fontSize: '5px'}}>
        Last name is required!</label>
    } 
}

export const validateEmail = (data) => {
    if(data.email === "" || data.email === undefined || data.email === null) {
        return <label 
        style={{color: 'red', fontSize: '5px'}}>
        email is required!</label>
    } 
    // else if (rules.isEmail ) {
    //     const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    //     isValid = pattern.test(value) && isValid;
    // }
}

export const validateAddress = (data) => {
    if(data.address === "" || data.address === undefined || data.address === null) {
        return <label 
        style={{color: 'red', fontSize: '5px'}}>
        Address is required!</label>
    } 
};