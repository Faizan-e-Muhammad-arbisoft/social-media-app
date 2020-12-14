import React from 'react';
import { Button } from 'react-bootstrap';


const Homepage = () => {

    return(
        <div>
            <Button variant="primary" type="submit">
                    Create a post
            </Button>
            <p>List of posts</p>
        </div>
    );
};

export default Homepage;