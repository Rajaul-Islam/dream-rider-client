
import React, { useState } from 'react';
import { Alert, Button, Nav, Spinner } from 'react-bootstrap';
import { NavLink,useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState('');
    const history=useHistory();
    const location =useLocation();
    const { user, isLoading, error, loginUser,signInWithGoogle } = useAuth();
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
        loginUser(loginData?.email, loginData?.password,location,history)
        e.preventDefault();
    }
    return (
        <div>
            {/* <Navigation></Navigation> */}
            {isLoading && <>
                <Button className='my-5' variant="primary" disabled>
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
                    type='submit'
                    value='Submit'
                >
                </input>
            </form>
            <p>
                --------------------------------

            </p>
            <Nav.Link className='text-dark' as={NavLink} to='/register'>Already have an account? please login</Nav.Link>
            <p>SignUp with google</p>
            <Button onClick={() => signInWithGoogle(location, history)}>Google SignIN</Button>
            {user?.email && <Alert variant='success' className='w-25 mx-auto ' >
                Login successfully
            </Alert>}
        </div>
    );
};

export default Login;