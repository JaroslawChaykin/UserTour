import React from "react"
import PropTypes from "prop-types"
class A_blueButton extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id
  }
  render () {
    return (
        <div className={"post-blue-btn"}>
          <a href={`/posts/${this.id}`}>Перейти</a>
        </div>
    );
  }
}

export default A_blueButton
