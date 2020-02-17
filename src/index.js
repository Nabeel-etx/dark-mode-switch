import React from "react";
import ReactDOM from "react-dom";
import Switch from "react-switch";

import "./styles.scss";

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    const colorstate = this.state.checked ? "dark" : "light";
    return (
      <div className={`example ${colorstate}`}>
        <div className="inner">
          <h2>Simple usage</h2>
          <label>
            <span>Switch with default style</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={38}
              className="react-switch"
            />
          </label>
          <p>
            The switch is <span>{this.state.checked ? "on" : "off"}</span>.
          </p>
        </div>
      </div>
    );
  }
}

const el = document.querySelector("#root");
ReactDOM.render(<Card title="Example Component" />, el);
