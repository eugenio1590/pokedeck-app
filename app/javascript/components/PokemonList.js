import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import PokemonCard from "./PokemonCard";

const PokemonList = ({ data, onSelect }) => {
  const columns = data.map(pokemon => (<Col key={pokemon.id}><PokemonCard {...pokemon} onSelect={onSelect} /></Col>))
  return (
    <Row xs={1} md={4} className="g-4">
      {columns}
    </Row>
  )
}

PokemonList.protoType = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default PokemonList