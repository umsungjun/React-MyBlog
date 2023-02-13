import React, { createContext, useState, useReducer } from 'react';

export const UserContext = createContext()

const initialUser = {
    name: 'sungjun',
    job: 'FE - developer'
}

const userReduser = (state, action) => {
    switch (action.type) {
        case 'changeJob':
            return { ...state, job: action.text }
            break;

        default:
            break;
    }
}

export default function UserStore(props) {

    const [user, dispatch] = useReducer(userReduser, initialUser)

    console.log(user)
    return (
        <UserContext.Provider value={dispatch}>
            {props.children}
        </UserContext.Provider>
    )
}
