import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

class Portfolio extends React.Component {
  state = {
    data: null,
  }

  async componentDidMount(){
    const url = "https://api.github.com/users/richardderoure/repos"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({data: data});
  }
  
  
render(){
  
//add max text limit for description
const getImg = () => {
  return "https://source.unsplash.com/random/500x500"
}

  return (
    <div className="card-container">
      {!this.state.data ? "loading data..." :
      this.state.data.map( project => 
          <Card className="card1">
            <CardImg top width="100%" src={getImg()} alt="Card image alt" />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardText>{!project.description ? 'description' : project.description}</CardText>
              <a href={project.html_url}><Button>Go to GitHub</Button></a>
            </CardBody>
          </Card>
      )}
      </div>
  );
};
}

export default Portfolio;