import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getPost } from 'store/selectors/userPost';
import { addComment } from 'store/actions/userPost';
import { RootStore } from 'store';

import PostViewPage from 'pages/PostViewPage';

const mapStateToProps = (state: RootStore, props: any) => {
  return {
    post: getPost(state, props.location.state.post_index),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addCommentHandler: (user: string, commentString: string, postIndex: number) =>
      dispatch<any>(addComment(user, commentString, postIndex)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostViewPage);
