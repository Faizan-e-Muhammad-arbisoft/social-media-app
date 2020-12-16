import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import CommonLayout from 'layout/CommonLayout';
import { getPosts } from 'store/selectors/createPost';


const Homepage = ( props: any ) => {

    let postCards = null;

    if(props.posts){
        postCards = Object.keys(props.posts).map(postKey =>{
            const post = props.posts[postKey];
            return(
                <Card key={postKey}>
                    <Card.Header as='h3'>{post.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>Owner: {post.owner} , Location: {post.place}</Card.Title>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                        <Button variant="primary">Add Comment</Button>
                    </Card.Body>
                </Card>
            );
        });
    }

    return(
        <CommonLayout>
            <Card>
                <Card.Body>
                    Share whats on your mind !!!
                    <Button variant="primary" as={ Link } to={'/post/create'}>
                        Create a post
                    </Button>
                </Card.Body>
            </Card>
            <div>
                {postCards}
            </div>
        </CommonLayout>
    );
};

const mapStateToProps = ( state: any ) => {
    return{
        posts: getPosts(state)
    };
};

export default connect(mapStateToProps)(Homepage);
