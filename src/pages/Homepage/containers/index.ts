import { connect } from 'react-redux';
import { getPosts } from 'store/selectors/userPost';
import { RootStore } from 'store';

import HomePage from 'pages/HomePage';

const mapStateToProps = (state: RootStore) => {
  return {
    posts: getPosts(state),
  };
};

export default connect(mapStateToProps)(HomePage);
