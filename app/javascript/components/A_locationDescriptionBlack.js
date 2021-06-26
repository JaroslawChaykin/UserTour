import React from "react"
import PropTypes from "prop-types"

class A_locationDescriptionBlack extends React.Component {
  constructor(props) {
    super(props);
    this.text = this.props.text
    this.color = this.props.color
  }

  render () {
    const color = {
      borderColor: this.color
    }
    return (
        <div className={"location-description-black"}>
          <div className={"outside-border"}>
            <div style={color} className={"inside-text"}>
              {this.text}
            </div>
          </div>
        </div>
    );
  }
}

export default A_locationDescriptionBlack
