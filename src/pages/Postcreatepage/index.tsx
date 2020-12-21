import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useFormik, FormikProvider } from 'formik';
import { initialValues } from 'pages/PostCreatePage/initialValues';
import { validationSchema } from 'pages/PostCreatePage/validationSchema';
import { createPost } from 'store/actions/createPost';
import CommonLayout from 'layout/CommonLayout';
import CustomInputComponent from 'components/Input';
import CustomButton from 'components/Button';
import {
  InnerContainerWrapper,
  HeaderWrapper,
  FormWrapper,
  BtnWrapper,
} from 'pages/PostCreatePage/PostCreatePage.styles';

const PostCreatePage = (props: any) => {
  const [redirect, setRedirect] = useState<boolean>(false);

  const submitHandler = (values: any) => {
    const post = {
      ...values,
      owner: localStorage.getItem('userName'),
    };
    props.createPostHandler(post.title, post.place, post.description, post.owner);
    setRedirect(true);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  return (
    <CommonLayout>
      {redirect ? <Redirect to="/homepage" /> : null}
      <InnerContainerWrapper>
        <HeaderWrapper>Create post</HeaderWrapper>
        <FormWrapper>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <CustomInputComponent
                label="Title"
                name="title"
                type="text"
                placeholder="Enter title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />

              <CustomInputComponent
                label="Place"
                name="place"
                type="text"
                placeholder="Enter place"
                onChange={formik.handleChange}
                value={formik.values.place}
              />

              <CustomInputComponent
                label="Description"
                name="description"
                as="textarea"
                rows={3}
                placeholder="Enter description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />

              <BtnWrapper>
                <CustomButton buttonVariant="primary" type="submit">
                  Share
                </CustomButton>
              </BtnWrapper>
            </Form>
          </FormikProvider>
        </FormWrapper>
      </InnerContainerWrapper>
    </CommonLayout>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createPostHandler: (title: string, place: string, description: string, owner: string) =>
      dispatch<any>(createPost(title, place, description, owner)),
  };
};

export default connect(null, mapDispatchToProps)(PostCreatePage);
