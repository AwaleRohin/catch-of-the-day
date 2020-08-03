import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    updateFish: PropTypes.func.isRequired,
    removeFish: PropTypes.func.isRequired,
    index: PropTypes.string,
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
    }).isRequired
  };
  handleChange = (evt) => {
    const updateFish = {
      ...this.props.fish,
      [evt.target.name]: evt.target.value,
    };
    this.props.updateFish(this.props.index, updateFish);
  };
  handleClick = () => {
    this.props.removeFish(this.props.index);
  };
  render() {
    return (
      <form className="fish-edit">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.props.fish.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={this.props.fish.price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value=""> --Select--</option>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          placeholder="Desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={this.props.fish.image}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Remove Fish</button>
      </form>
    );
  }
}

export default EditFishForm;
