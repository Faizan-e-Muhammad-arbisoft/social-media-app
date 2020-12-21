import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import CustomButton from 'components/Button';
import { logout } from 'store/actions/auth';
import { getIsAuthenticated } from 'store/selectors/auth';
import { RootStore } from 'store';

const Navigation = (props: any) => {
  const { isAuthenticated } = props;

  const user = localStorage.getItem('userName');

  const logoutHandler = () => {
    props.logoutHandler();
  };

  return (
    <Navbar bg="primary" variant="dark">
      {isAuthenticated === false ? <Redirect to="/" /> : null}
      <Navbar.Brand as={Link} to={'/homepage'}>
        Social Media App
      </Navbar.Brand>
      <Navbar.Text className="mr-auto">Signed in as: {user}</Navbar.Text>
      <div>
        <CustomButton buttonVariant="outline-light" onClick={logoutHandler}>
          Logout
        </CustomButton>
      </div>
    </Navbar>
  );
};

const mapStateToProps = (state: RootStore) => {
  return {
    isAuthenticated: getIsAuthenticated(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logoutHandler: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
