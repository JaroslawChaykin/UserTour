import React from "react"
import PropTypes from "prop-types"
class A_tourCard extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title
    this.description = this.props.description
    this.image = this.props.image
  }
  render () {
    return (
      <div className={'tour-card'}>
        <div className="tour-card-box">
          <div className="tour-image">
            <img src={this.image} alt=""/>
          </div>
          <div className="tour-information">
            <div className="tour-title">{this.title}</div>
            <div className="tour-description">{this.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default A_tourCard
