import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import PokemonCard from "./PokemonCard";

const PokemonList = ({data}) => {
    const columns = data.map(pokemon => (<Col key={pokemon.id}><PokemonCard {...pokemon}/></Col>))
    return (
        <Row xs={1} md={2} className="g-4">
            {columns}
        </Row>
    )
}

PokemonList.protoType = {
    data: PropTypes.array
}

export default PokemonList