import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  state = {
    name: "",
    price: "",
    status: "",
    desc: "",
    image: "",
  };
  static propTypes = {
    addFish: PropTypes.func.isRequired
  };
  createFish = (evt) => {
    evt.preventDefault();
    const fish = { ...this.state };
    fish.price = parseFloat(fish.price);
    this.props.addFish(fish);
    this.setState({
      name: "",
      price: "",
      status: "",
      desc: "",
      image: "",
    });
    evt.currentTarget.reset();
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={this.handleChange}
          value={this.state.price}
        />
        <select name="status" onChange={this.handleChange}>
          <option value=""> --Select--</option>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          placeholder="Desc"
          onChange={this.handleChange}
          value={this.state.desc}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={this.handleChange}
          value={this.state.image}
        />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
