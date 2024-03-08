import React from "react";
import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";

const PokemonCard = ({ id, name, image, types, abilities }) => {
    const typesItems = types.map((type, index) => (<Badge key={index} bg="secondary" className="me-2">{type}</Badge>));
    const abilitiesItems = abilities.map((ability, index) => (<Badge key={index} bg="secondary" className="me-2">{ability}</Badge>));
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Header>#{id}</Card.Header>
            <Card.Img variant="top" src={image} width="205px"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="d-flex flex-column">
                    <div className="mb-2">
                        <p className="mb-2">Type</p>
                        <div className="d-flex">
                            {typesItems}
                        </div>
                    </div>
                    <div>
                        <p className="mb-2">Abilities</p>
                        <div className="d-flex">
                            {abilitiesItems}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

PokemonCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    types: PropTypes.array,
    abilities: PropTypes.array
}

export default PokemonCard;