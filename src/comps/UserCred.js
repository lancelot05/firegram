import React from 'react';
import useAuth from '../hooks/useAuth';


const UserCred = ({ email, password }) => {
    useAuth(email, password);
    return (
        <div>
            
        </div>
    )
}

export default UserCred
