import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import CommonLayout from 'layout/CommonLayout';
import {
  OuterContainerWrapper,
  TopContainerWrapper,
  CardWrapper,
  HeaderWrapper,
  BtnWrapper,
  BottomContainerWrapper,
} from 'pages/HomePage/HomePage.styles';

const HomePage = (props: any) => {
  let postCards = null;

  if (props.posts) {
    postCards = Object.keys(props.posts).map((postKey) => {
      const post = props.posts[postKey];
      return (
        <CardWrapper key={postKey}>
          <Card>
            <Card.Header as="h3">{post.title}</Card.Header>
            <Card.Body>
              <Card.Title>By: {post.owner}</Card.Title>
              <Card.Title>No of Comments: {post.comments.length}</Card.Title>
              <BtnWrapper>
                <Button variant="primary" as={Link} to={{ pathname: '/post/view', state: { post_index: postKey } }}>
                  View Post
                </Button>
              </BtnWrapper>
            </Card.Body>
          </Card>
        </CardWrapper>
      );
    });
  }

  return (
    <CommonLayout>
      <OuterContainerWrapper>
        <TopContainerWrapper>
          <Card>
            <Card.Body>
              <h5>Share whats on your mind !!!</h5>
              <BtnWrapper>
                <Button variant="primary" as={Link} to={'/post/create'}>
                  Create a post
                </Button>
              </BtnWrapper>
            </Card.Body>
          </Card>
        </TopContainerWrapper>
        <BottomContainerWrapper>
          <HeaderWrapper>POST FEED</HeaderWrapper>
          {postCards}
        </BottomContainerWrapper>
      </OuterContainerWrapper>
    </CommonLayout>
  );
};

export default HomePage;
