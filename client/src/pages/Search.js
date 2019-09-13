import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { SearchResultList, SearchResultItem } from "../components/SearchResultList";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        image: "",
        link: "",
        searchTerm: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", authors: "", description: "", image: "", link: "" })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.authors) {
    //         API.saveBook({
    //             title: this.state.title,
    //             authors: this.state.authors,
    //             description: this.state.description,
    //             image: this.state.thumbnail,
    //             link: this.state.link
    //         })
    //             .then(res => this.loadBooks())
    //             .catch(err => console.log(err));
    //     }
    // };

    // handleFormSubmit = event => {
    //     // When the form is submitted, prevent its default behavior, get books/search term & update the state
    //     event.preventDefault();
    //     API.getBooks(this.state.recipeSearch)
    //       .then(res => this.setState({ recipes: res.data }))
    //       .catch(err => console.log(err));
    //   };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12">
                        <Jumbotron>
                            <h1>(React) Google Books Search</h1>
                            <h2>Search for and Save Books of Interest</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                        <form>
                        <h3>Book Search</h3>
                            <Input
                                value={this.state.searchTerm}
                                onChange={this.handleInputChange}
                                name="searchTerm"
                                placeholder="Search Google Books"
                            />
                            <FormBtn
                                disabled={!(this.state.searchTerm)}
                                onClick={this.handleFormSubmit}
                            >
                                Search
                        </FormBtn>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                        {!this.state.books.length ? (
                            <h3>No Results to Display</h3>
                        ) : (
                            <SearchResultList>
                                 <h3>Results</h3>
                                {this.state.books.map(book => {
                                    return (
                                        <SearchResultItem
                                            title={book.title}
                                            authors={book.authors}
                                            description={book.description}
                                            image={book.thumbnail}
                                            link={book.link}
                                        />
                                    );
                                })}
                            </SearchResultList>
                        )}
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Search;
