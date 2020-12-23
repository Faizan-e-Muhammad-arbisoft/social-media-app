import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createPost } from 'store/actions/userPost';

import PostCreatePage from 'pages/PostCreatePage';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createPostHandler: (title: string, place: string, description: string, owner: string) =>
      dispatch<any>(createPost(title, place, description, owner)),
  };
};

export default connect(null, mapDispatchToProps)(PostCreatePage);
