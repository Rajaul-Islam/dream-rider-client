import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    console.log(email);
    const handleOnBlur = e => {

        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        console.log(user);
        fetch('http://localhost:5000/uniqueUser/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        e.preventDefault()
    }
    return (
        <div>
            <h1>Make admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <input
                    onBlur={handleOnBlur}
                    type="email"
                    required
                    className='w-50 my-3 mx-auto'
                    placeholder="name@example.com"
                />
                <input
                    type='submit'
                    value='submit'
                >
                </input>
            </form>
        </div>
    );
};

export default MakeAdmin;