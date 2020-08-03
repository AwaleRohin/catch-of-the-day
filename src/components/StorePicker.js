import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const storeName = this.myInput.current.value
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.handleSubmit}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            name="storeName"
            placeholder="Store Name"
            required
            defaultValue={getFunName()}
            ref={this.myInput}
          />
          <button type="submit">Visit Store </button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
