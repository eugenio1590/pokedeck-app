import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";

const FullSpinner = ({isActive}) => {
    return (
      <div className={`spinner-container ${isActive ? 'active' : ''}`}>
        <Spinner animation="border" />
      </div>
    )
}

FullSpinner.propTypes = {
  isActive: PropTypes.bool
}

export default FullSpinner;