import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const images = require.context('../images', true)
const rightArrow = images('./right-arrow.png', true)

const EvolutionChain = ({ chain }) => {
  const Element = (pokemon) => {
    return (
      <Col key={pokemon.id}>
        <img src={pokemon.image} style={{border: `2px solid ${pokemon.color}`, borderRadius: "50%"}} width="75px" />
        <h6>{pokemon.name} <span className="text-muted">#{pokemon.id}</span></h6>
      </Col>
    )
  }

  const Arrow = () => {
    return (
      <Col>
        <img src={rightArrow} width="32px" />
      </Col>
    )
  }

  const rows = (pokemon) => {
    const nextItem = pokemon.evolves_to.length > 0 ? <><Arrow />{pokemon.evolves_to.map((i) => rows(i))}</> : ''
    return (
      <>
        <Element {...pokemon.info} />
        {nextItem}
      </>
    )
  }

  return chain.evolves_to.length > 0 ? (<Row className="align-items-center">{rows(chain)}</Row>) : 'Does Not Have Evolutions';
}

EvolutionChain.propTypes = {
  chain: PropTypes.object
}

export default EvolutionChain