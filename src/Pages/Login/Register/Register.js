
import React, { useState } from 'react';
import { Alert, Nav, Spinner, Button } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';

const Register = () => {
    const { user, registerUser, isLoading, error, signInWithGoogle } = useAuth()
    const history = useHistory();
    const location = useLocation();
    console.log(user);
    const [loginData, setLoginData] = useState('');
    console.log(loginData);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value)
        const newLoginData = { ...loginData };

        newLoginData[field] = value;
        setLoginData(newLoginData);


    }
    const handleLogInSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password dis not match')
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history)
        e.preventDefault();
    }
    return (
        <div>
            {/* <Navigation></Navigation> */}
            {isLoading && <>
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Loading...</span>
                </Button>{' '}
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </>}

            <h1>this is login page</h1>

            <form onSubmit={handleLogInSubmit}>
                <input
                    className='my-2 w-75 p-2'
                    type='text'
                    name='name'
                    placeholder='Your name'
                    onBlur={handleOnBlur}
                ></input> <br />
                <input
                    className='my-2 w-75 p-2'
                    type='email'
                    name='email'
                    placeholder='your email'
                    onBlur={handleOnBlur}
                ></input><br />
                <input
                    className='my-2 w-75 p-2'
                    type='password'
                    placeholder='password'
                    name='password'
                    onBlur={handleOnBlur}
                ></input><br />
                <input
                    className='my-2 w-75 p-2'
                    type='password'
                    placeholder='re-enter password'
                    name='password2'
                    onBlur={handleOnBlur}
                ></input><br />
                <input
                    type='submit'
                    value='Submit'
                >
                </input>
            </form>
            <p>
                --------------------------------

            </p>
            <Nav.Link className='text-dark' as={NavLink} to='/login'>Already have an account? please login</Nav.Link>
            <p>SignUp with google</p>
            <Button onClick={() => signInWithGoogle(location, history)}>Google SignIN</Button>


            {user?.email && <Alert variant='success' className='w-25 mx-auto ' >
                User Register successfully
            </Alert>}


        </div>
    );
};

export default Register;