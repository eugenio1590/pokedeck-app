import React from "react";
import PropTypes from "prop-types";
import { Modal, Stack, Badge } from "react-bootstrap";

const images = require.context('../images', true)
const noImageAvailable = images('./No_Image_Available.jpg', true)

const PokemonCard = ({pokemon, onClose}) => {
  const title = pokemon != null ? `#${pokemon.id} ${pokemon.name}` : '';
  const description = pokemon != null ? pokemon.description : '';
  const weight = pokemon != null ? pokemon.weight : '';
  const imagePaht = pokemon != null ? pokemon.image : noImageAvailable;
  const typesItems = pokemon != null ? pokemon.types.map((type, index) => (<Badge pill key={index} bg="secondary">{type}</Badge>)) : [];
  const abilitiesItems = pokemon != null ? pokemon.abilities.map((ability, index) => (<p pill key={index}>{ability}</p>)) : [];
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered 
      show={pokemon != null} 
      onHide={onClose}>
      <Modal.Header closeButton />
      <Modal.Body>
        <img src={imagePaht} width="100%"/>
        <div className="d-flex flex-column">
          <div className="mb-2 d-flex">
            <h5 className="mb-0 me-2">{title}</h5>
            <Stack direction="horizontal" gap={1}>
              {typesItems}
            </Stack>
          </div>
          <p>{description}</p>
          <dl className="row">
            <dt className="col-sm-3">Weight</dt>
            <dd className="col-sm-9">Weight: {weight} kg</dd>

            <dt className="col-sm-3">Abilities</dt>
            <dd className="col-sm-9">{abilitiesItems}</dd>
          </dl>
        </div>
      </Modal.Body>
    </Modal>
  )
}

PokemonCard.propTypes = {
  isShow: PropTypes.bool.isRequired,
  pokemon: PropTypes.object,
  onClose: PropTypes.func.isRequired
}

export default PokemonCard