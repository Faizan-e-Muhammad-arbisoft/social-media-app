import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { login } from 'store/actions/auth';
import { getAuthError, getIsAuthenticated, getAuthLoading } from 'store/selectors/auth';
import { RootStore } from 'store';

import LoginPage from 'pages/LoginPage';

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
