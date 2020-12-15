import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import CustomButton from 'components/Button';


const OuterContainer = styled.div`
    background-color:#1E90FF;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
`;

const InnerContainer = styled.div`
    background-color: white;
    width: 50%;
    height: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    padding-top: 70px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 20px;
`;

const Header = styled.h1`
    text-align: center;
`;

const FormWrapper = styled.div`
    margin-top: 30px;
`;

const BtnWrapper = styled.div`
    margin-top: 50px;
`;

const ErrorWrapper = styled.div`
    color: red;
`;

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
        <OuterContainer>
            {authRedirect ? <Redirect to='/homepage' /> : null}
            <InnerContainer>
                <Header>User Login</Header>
                <Formik
                initialValues={{username:'', password: ''}}
                validationSchema={Yup.object({
                    username: Yup.string().required('Required'),
                    password: Yup.string().required('Required')
                })}
                onSubmit={(values) =>{submitHandler(values)}}
                >
                    {({handleSubmit, handleChange, values}) =>(
                        <FormWrapper>
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
            
                            <BtnWrapper>
                            <CustomButton buttonVariant='primary' type='submit'>
                                Login
                            </CustomButton>
                            </BtnWrapper>

                            <ErrorWrapper>
                                {userError ? userError : null}
                            </ErrorWrapper>
                        </Form>
                        </FormWrapper>
                    )}
                </Formik>
            </InnerContainer>
        </OuterContainer>
    );
};

export default Loginpage;