import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useFormik, FormikProvider } from 'formik';
import { initialValues } from 'pages/LoginPage/initialValues';
import { validationSchema } from 'pages/LoginPage/validationSchema';
import CustomInputComponent from 'components/Input';
import CustomButton from 'components/Button';
import { login } from 'store/actions/auth';
import { getAuthError, getIsAuthenticated, getAuthLoading } from 'store/selectors/auth';
import { RootStore } from 'store';
import {
  OuterContainerWrapper,
  InnerContainerWrapper,
  HeaderWrapper,
  FormWrapper,
  BtnWrapper,
  ErrorWrapper,
} from 'pages/LoginPage/LoginPage.styles';

const LoginPage = (props: any) => {
  const { loading, error, isAuthenticated } = props;

  const submitHandler = (values: any) => {
    props.loginHandler(values.username, values.password);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  return (
    <OuterContainerWrapper>
      {isAuthenticated ? <Redirect to="/homepage" /> : null}
      <InnerContainerWrapper>
        <HeaderWrapper>User Login</HeaderWrapper>
        <FormWrapper>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <CustomInputComponent
                label="Username"
                name="username"
                type="text"
                placeholder="Enter username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />

              <CustomInputComponent
                label="Password"
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              <BtnWrapper>
                <CustomButton buttonVariant="primary" type="submit">
                  Login
                </CustomButton>
              </BtnWrapper>

              <ErrorWrapper>{error ? 'Incorrect Credentials' : null}</ErrorWrapper>
            </Form>
          </FormikProvider>
        </FormWrapper>
      </InnerContainerWrapper>
    </OuterContainerWrapper>
  );
};

const mapStateToProps = (state: RootStore) => {
  return {
    loading: getAuthLoading(state),
    error: getAuthError(state),
    isAuthenticated: getIsAuthenticated(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loginHandler: (username: string, password: string) => dispatch<any>(login(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
