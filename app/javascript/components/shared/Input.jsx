import React from "react";

class Input extends React.Component {
  state = {
    input: this.props.input || ""
  };

  resetState = () => {
    this.setState({
      input: ""
    });
  };

  handleChange = e => {
    const value = e.target.value;

    this.setState({
      input: value
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.onSubmit(this.state.input, this.resetState);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input, this.resetState);
  };

  handleBlur = e => {
    this.resetState();
    this.props.onBlur();
  };

  render() {
    return (
      <input
        className={this.props.className || ""}
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.state.input}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default Input;
