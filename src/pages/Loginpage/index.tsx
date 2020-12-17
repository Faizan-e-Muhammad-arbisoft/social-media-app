import React  from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Formik} from 'formik';
import { initialValues } from 'pages/Loginpage/initialValues';
import { validationSchema } from 'pages/Loginpage/validationSchema';
import { Styled } from 'pages/Loginpage/Loginpage.styles';
import CustomInputComponent from 'components/Input';
import CustomButton from 'components/Button';
import { login } from 'store/actions/auth';
import { getAuthError, getIsAuthenticated, getAuthLoading } from 'store/selectors/auth';
import { RootStore } from 'store';


const Loginpage = ( props: any ) => {
    const { loading, error, isAuthenticated } = props;

    const submitHandler = (values: any) => {
        props.loginHandler(values.username, values.password);
    };

    return(
        <Styled.OuterContainer>
            {isAuthenticated ? <Redirect to='/homepage' /> : null}
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
                            <CustomInputComponent
                            label='Username'
                            type='text'
                            placeholder='Enter username'
                            onChange={handleChange}
                            value={values.username}
                            name='username' />

                            <CustomInputComponent
                            label='Password'
                            type='password'
                            placeholder='Enter password'
                            onChange={handleChange}
                            value={values.password}
                            name='password' />
            
                            <Styled.BtnWrapper>
                            <CustomButton buttonVariant='primary' type='submit'>
                                Login
                            </CustomButton>
                            </Styled.BtnWrapper>

                            <Styled.ErrorWrapper>
                                {error ? 'Incorrect Credentials' : null}
                            </Styled.ErrorWrapper>
                        </Form>
                        </Styled.FormWrapper>
                    )}
                </Formik>
            </Styled.InnerContainer>
        </Styled.OuterContainer>
    );
};

const mapStateToProps = ( state: RootStore ) => {
    return{
        loading: getAuthLoading(state),
        error: getAuthError(state),
        isAuthenticated: getIsAuthenticated(state)
    };
};

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        loginHandler: (username: string, password: string) =>
            dispatch(login(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);
