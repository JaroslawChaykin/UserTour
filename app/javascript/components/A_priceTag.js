import React from "react"
import PropTypes from "prop-types"
class A_priceTag extends React.Component {
  constructor(props) {
    super(props);
    this.price = this.props.price
    this.color = this.props.color
  }
  render () {
    const color = {
      background: this.color
    }
    return (
        <div className={"price-tag"}>
          <div style={color} className={"outside-border"}>
            <div className={"inside-text"}>
              {`от ${this.price}₽`}
            </div>
          </div>
        </div>
    );
  }
}

export default A_priceTag
