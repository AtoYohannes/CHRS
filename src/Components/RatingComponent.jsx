import React, { Component } from "react";
import { MdStar } from "react-icons/md";
class RatingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
    };
  }

  componentDidMount() {
    console.log(this.props.rating);
  }

  render() {
    const { size } = this.props;

    return (
      <div>
        <MdStar size={size} />
        <MdStar size={size} />
        <MdStar size={size} />
        <MdStar size={size} />
        <MdStar size={size} />
      </div>
    );
  }
}
export default RatingComponent;
