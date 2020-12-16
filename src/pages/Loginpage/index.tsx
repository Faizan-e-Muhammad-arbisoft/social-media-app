import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import { initialValues } from 'pages/Loginpage/initialValues';
import { validationSchema } from 'pages/Loginpage/validationSchema';
import { Styled } from 'pages/Loginpage/Loginpage.styles';
import CustomButton from 'components/Button';


const Loginpage = () => {
    const [userError, setUserError] = useState<string>();
    const [authRedirect, setAuthRedirect] = useState<boolean>(false);

    const users= [
        {username: 'user1', password: 'pass1'},
        {username: 'user2', password: 'pass2'}
    ];

    const submitHandler = (values: any) => {
        let user = users.find(user => user.username === values.username && user.password === values.password);
        if(user){
            localStorage.setItem('userName', user.username);
            setAuthRedirect(true);
        }
        else{
            setUserError('Incorrect credentials');
        }
    };

    return(
        <Styled.OuterContainer>
            {authRedirect ? <Redirect to='/homepage' /> : null}
            <Styled.InnerContainer>
                <Styled.Header>User Login</Styled.Header>
                <Formik
                initialValues={initialValues}
                validationSchema={ validationSchema }
                onSubmit={(values) =>{submitHandler(values)}}
                >
                    {({handleSubmit, handleChange, values}) =>(
                        <Styled.FormWrapper>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                type='text'
                                placeholder="Enter username"
                                onChange={handleChange}
                                value={values.username}
                                name='username' />
                            </Form.Group>
                            <ErrorMessage name='username'>{ msg => <div style={{ color: 'red' }}>*{msg}</div> }</ErrorMessage>
            
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                value={values.password}
                                name='password' />
                            </Form.Group>
                            <ErrorMessage name='password'>{ msg => <div style={{ color: 'red' }}>*{msg}</div> }</ErrorMessage>
            
                            <Styled.BtnWrapper>
                            <CustomButton buttonVariant='primary' type='submit'>
                                Login
                            </CustomButton>
                            </Styled.BtnWrapper>

                            <Styled.ErrorWrapper>
                                {userError ? userError : null}
                            </Styled.ErrorWrapper>
                        </Form>
                        </Styled.FormWrapper>
                    )}
                </Formik>
            </Styled.InnerContainer>
        </Styled.OuterContainer>
    );
};

export default Loginpage;
