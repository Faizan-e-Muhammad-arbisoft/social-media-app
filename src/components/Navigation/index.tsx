import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import CustomButton from 'components/Button';


const Navigation = () => {
    const [authRedirect, setAuthRedirect] = useState<boolean>(false);

    const user = localStorage.getItem('userName');

    const logoutHandler = () => {
        localStorage.removeItem('userName');
        setAuthRedirect(true);
    }

    return (
        <Navbar bg="primary" variant="dark">
            { authRedirect ? <Redirect to='/' /> : null }
            <Navbar.Brand as={ Link } to={ '/homepage' } >Social Media App</Navbar.Brand>
            <Navbar.Text className='mr-auto'>
                Signed in as: {user}
            </Navbar.Text>
            <div>
                <CustomButton buttonVariant="outline-light" onClick={logoutHandler}>Logout</CustomButton>
            </div>
        </Navbar>
    );
};

export default Navigation;
