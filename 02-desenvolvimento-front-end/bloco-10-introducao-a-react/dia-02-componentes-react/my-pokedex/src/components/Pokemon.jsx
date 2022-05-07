import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const {infos: {name, type, averageWeight: {value, measurementUnit}, image}} = this.props;
    return (
      <div className="pokemons">
        <div>
          <h3>{name}</h3>
          <h4>{type}</h4>
          <p>{`Average weight: ${value} ${measurementUnit}`}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  infos: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;