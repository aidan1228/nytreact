import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API"
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  // Initialize this.state.books as an empty array
  state = {
    articles: [],
    saved: []
  };

  // Add code here to get all books from the database and save them to this.state.books

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <Jumbotron>
              <h1>Search</h1>
            </Jumbotron>
            <form>
              <Input name="Topic" placeholder="Topic" />
              <Input name="Start-year" placeholder="Start-year" />
              <Input name="End-year" placeholder="End-year" />
              <FormBtn>Submit</FormBtn>
            </form>
          </Col>
          <Col size="md-4 sm-12">
            <Jumbotron>
              <h1>Articles</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <a href={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.author}
                      </strong>
                    </a>
                    <SaveBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-4 sm-12">
            <Jumbotron>
              <h1>Saved</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <a href={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.author}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
