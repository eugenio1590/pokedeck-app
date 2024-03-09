import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Stack, Badge } from "react-bootstrap";

const images = require.context('../images', true)
const noImageAvailable = images('./No_Image_Available.jpg', true)

const PokemonCard = ({ id, name, image, weight, types, abilities }) => {
  const [imagePaht, setImagePath] = useState(image);
  const typesItems = types.map((type, index) => (<Badge pill key={index} bg="light" text="dark">{type}</Badge>));
  const abilitiesItems = abilities.map((ability, index) => (<Badge pill key={index} bg="secondary">{ability}</Badge>));
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={imagePaht} width="205px" onError={() => setImagePath(noImageAvailable)}/>
      <Card.Body>
        <h5 className="card-title">#{id} {name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Weight: {weight}</h6>
        <div className="d-flex flex-column">
          <div className="mb-2 d-flex">
            <p className="mb-0">Type:</p>
            <Stack direction="horizontal" gap={1}>
              {typesItems}
            </Stack>
          </div>
          <div>
            <Stack direction="horizontal" gap={1} className="d-inline-flex">
              {abilitiesItems}
            </Stack>
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
  weight: PropTypes.string,
  types: PropTypes.array,
  abilities: PropTypes.array
}

export default PokemonCard;