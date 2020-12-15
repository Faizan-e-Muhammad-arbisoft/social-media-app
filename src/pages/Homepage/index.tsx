import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CommonLayout from 'layout/CommonLayout';


const Homepage = () => {

    return(
        <CommonLayout>
            <Card>
                <Card.Body>
                    Whats on your mind ?
                    <Button variant="primary" type="submit">
                        Create a post
                    </Button>
                </Card.Body>
            </Card>
            <p>List of posts</p>
        </CommonLayout>
    );
};

export default Homepage;