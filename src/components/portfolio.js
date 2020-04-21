import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Portfolio = (props) => {
  return (
    <div className="card1">
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1522199794616-8a62b541f762?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
        <Button>Go somewhere</Button>
      </Card>
    </div>
  );
};

export default Portfolio;