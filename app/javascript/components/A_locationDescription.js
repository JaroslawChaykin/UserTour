import React from "react"
import PropTypes from "prop-types"

class A_locationDescription extends React.Component {
  constructor(props) {
    super(props);
    this.text = this.props.text
    this.color = this.props.color
  }

  render () {
    const color = {
      background: this.color
    }
    return (
      <div className={"location-description"}>
        <div style={color} className={"outside-border"}>
          <div className={"inside-text"}>
            {this.text}
          </div>
        </div>
      </div>
    );
  }
}

export default A_locationDescription
