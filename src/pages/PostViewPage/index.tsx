import React from 'react';
import { Form, Card } from 'react-bootstrap';
import { useFormik, FormikProvider } from 'formik';
import CommonLayout from 'layout/CommonLayout';
import { initialValues } from 'pages/PostViewPage/initialValues';
import { validationSchema } from 'pages/PostViewPage/validationSchema';
import CustomInputComponent from 'components/Input';
import CustomButton from 'components/Button';
import {
  OuterContainerWrapper,
  PostContainerWrapper,
  CommentsContainerWrapper,
  HeaderWrapper,
  ParagraphWrapper,
  SubHeaderWrapper,
  FormWrapper,
  BtnWrapper,
} from 'pages/PostViewPage/PostViewPage.styles';

const PostViewPage = (props: any) => {
  const post = props.post;

  let postComments = null;
  if (post.comments) {
    postComments = Object.keys(post.comments).map((commentKey) => {
      const comment = post.comments[commentKey];
      return (
        <Card key={commentKey}>
          <Card.Body>
            <Card.Title>{comment.user}:</Card.Title>
            <Card.Text>{comment.comment}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }

  const submitHandler = (values: any) => {
    props.addCommentHandler(localStorage.getItem('userName'), values.comment, props.location.state.post_index);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      submitHandler(values);
      resetForm();
    },
  });

  return (
    <CommonLayout>
      <OuterContainerWrapper>
        <PostContainerWrapper>
          <HeaderWrapper>{post.title}</HeaderWrapper>
          <SubHeaderWrapper>By: {post.owner}</SubHeaderWrapper>
          <SubHeaderWrapper>Location: {post.place}</SubHeaderWrapper>
          <ParagraphWrapper>{post.description}</ParagraphWrapper>
        </PostContainerWrapper>
        <CommentsContainerWrapper>
          <SubHeaderWrapper>Comments: {post.comments.length}</SubHeaderWrapper>
          <FormWrapper>
            <FormikProvider value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <CustomInputComponent
                  label="Add a comment"
                  name="comment"
                  type="text"
                  placeholder="Type a comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                <BtnWrapper>
                  <CustomButton buttonVariant="primary" type="submit">
                    Comment
                  </CustomButton>
                </BtnWrapper>
              </Form>
            </FormikProvider>
          </FormWrapper>
          {postComments}
        </CommentsContainerWrapper>
      </OuterContainerWrapper>
    </CommonLayout>
  );
};

export default PostViewPage;
