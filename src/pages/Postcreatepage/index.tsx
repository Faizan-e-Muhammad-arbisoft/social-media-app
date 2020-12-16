import React, { useState } from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createPost } from 'store/actions/createPost';
import { Styled } from 'pages/Postcreatepage/Postcreatepage.styles';
import CommonLayout from 'layout/CommonLayout';
import CustomButton from 'components/Button';


const Postcreatepage = ( props: any ) => {
    const [redirect, setRedirect] = useState<boolean>(false);

    const submitHandler = (values: any) => {
        const post = {
            ...values,
            owner: localStorage.getItem('userName')
        }
        props.createPostHandler(post.title, post.place, post.description, post.owner);
        setRedirect(true);
    };

    return(
        <CommonLayout>
            {redirect ? <Redirect to='/homepage' /> : null}
            <Styled.InnerContainer>
                <Styled.Header>Create post</Styled.Header>
                <Formik
                    initialValues={{title:'', description: '', place: ''}}
                    validationSchema={Yup.object({
                        title: Yup.string().required('Required'),
                        description: Yup.string().required('Required'),
                        place: Yup.string().required('Required')
                    })}
                    onSubmit={(values) =>{submitHandler(values)}}
                    >
                        {({handleSubmit, handleChange, values}) =>(
                            <Styled.FormWrapper>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                    type='text'
                                    placeholder="Enter title"
                                    onChange={handleChange}
                                    value={values.title}
                                    name='title' />
                                </Form.Group>
                                <ErrorMessage name='title'>{ msg => <div style={{ color: 'red' }}>*{msg}</div> }</ErrorMessage>

                                <Form.Group>
                                    <Form.Label>Place</Form.Label>
                                    <Form.Control
                                    type='text'
                                    placeholder="Enter place"
                                    onChange={handleChange}
                                    value={values.place}
                                    name='place' />
                                </Form.Group>
                                <ErrorMessage name='place'>{ msg => <div style={{ color: 'red' }}>*{msg}</div> }</ErrorMessage>

                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                    as='textarea'
                                    rows={3}
                                    placeholder="Enter description"
                                    onChange={handleChange}
                                    value={values.description}
                                    name='description' />
                                </Form.Group>
                                <ErrorMessage name='description'>{ msg => <div style={{ color: 'red' }}>*{msg}</div> }</ErrorMessage>

                                <Styled.BtnWrapper>
                                    <CustomButton buttonVariant='primary' type='submit'>
                                        Share
                                    </CustomButton>
                                </Styled.BtnWrapper>

                            </Form>
                            </Styled.FormWrapper>
                        )}
                </Formik>
            </Styled.InnerContainer>
        </CommonLayout>
    );
};

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        createPostHandler: (title: string, place: string, description: string, owner: string) =>
            dispatch(createPost(title, place, description, owner))
    };
};

export default connect(null, mapDispatchToProps)(Postcreatepage);
