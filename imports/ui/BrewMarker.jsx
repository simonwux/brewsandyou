import React, { Component } from "react";
import { Marker } from "react-google-maps";
import PropTypes from "prop-types";
// import BeerIcon from "public/favicon.ico";

class BrewMarker extends Component {
  constructor(props) {
    super(props);
  }

  toggleOpen() {
    //new logic should be to highlight in the list which brewery has been selected
    // this.setState({ isOpen: !this.state.isOpen }, () => {
    //   if (!this.state.isOpen) {
    //     this.setState({ activeMarker: false }, () => {
    //       this.props.closeMarkers(null);
    //     });
    //   } else {
    //     this.props.closeMarkers(this.props.uid);
    //   }
    // });
  }

  componenetDidUpdate(nextProps) {
    //also old logic
    this.setState({ activeMarker: nextProps.activeMarker });
  }

  render() {
    //  console.log("BREWMARKERPROPS", this.props);
    return (
      <div>
        <Marker
          title={this.props.name}
          onClick={this.toggleOpen}
          position={this.props.location}
          icon={"marker-75.png"}
        />
      </div>
    );
  }
}
//        <img
//   className="mr-3 bg-light rounded"
//   width="48"
//   height="48"
//   src={"favicon.ico"}
// />
// <Marker
//   title={this.props.name}
//   onClick={this.toggleOpen}
//   position={this.props.location}
//   icon={}
// />
BrewMarker.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  website_url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  brewery: PropTypes.object.isRequired
};

export default BrewMarker;
