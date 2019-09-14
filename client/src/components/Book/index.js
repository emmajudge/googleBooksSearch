import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail"

function Book({title,authors,description,image,link,Button}){
    return(
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h3 className="font-italic">{title}</h3>
                </Col>
                <Col size="md-4">
                    <div className="button-div">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
                            View
                        </a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <p className="font-italic small">Author: {authors}</p>
                </Col>
            </Row>
            <Row className="flex-wrap-reverse">
                <Col size="md-2">
                    <img className="img-thumbnail w-100" src={image} alt={Thumbnail} />
                </Col>
                <Col size="md-10">
                    <p>{description}</p>
                </Col>
            </Row>
        </ListItem>
    )
}

export default Book;